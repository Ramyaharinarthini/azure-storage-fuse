#!/bin/bash
set -e

# Each test will be performed 3 times
iterations=3

# Mount path for blobfuse is supplied on command line while executing this script
mount_dir=$1

# Type of tests we are going to perform
type=$2

# Directory where output logs will be generated by fio
output="./${type}_bandwidth"

# --------------------------------------------------------------------------------------------------
# Method to mount blobfuse and wait for system to stablize
mount_blobfuse() {
  set +e

  blobfuse2 mount ${mount_dir} --config-file=./config.yaml
  mount_status=$?
  set -e
  if [ $mount_status -ne 0 ]; then
    echo "Failed to mount file system"
    exit 1
  fi

  # Wait for daemon to come up and stablise
  sleep 5

  rm -rf ${mount_dir}/*
}

# --------------------------------------------------------------------------------------------------
# Method to execute fio command for a given config file and generate summary result
execute_test() {
  job_file=$1
  bench_file=$2
  log_dir=$4

  job_name=$(basename "${job_file}")
  job_name="${job_name%.*}"

  echo -n "Running job ${job_name} for ${iterations} iterations... "

  for i in $(seq 1 $iterations);
  do
    echo -n "${i};"
    set +e

    timeout 300s fio --thread \
      --output=${output}/${job_name}trial${i}.json \
      --output-format=json \
      --directory=${mount_dir} \
      --filename=${bench_file}${i} \
      --eta=never \
      ${job_file}

    job_status=$?
    set -e
    if [ $job_status -ne 0 ]; then
      echo "Job ${job_name} failed : ${job_status}"
      exit 1
    fi
  done

  # From the fio output get the bandwidth details and put it in a summary file
  jq -n 'reduce inputs.jobs[] as $job (null; .name = $job.jobname | .len += 1 | .value += (if ($job."job options".rw == "read")
      then $job.read.bw / 1024
      elif ($job."job options".rw == "randread") then $job.read.bw / 1024
      elif ($job."job options".rw == "randwrite") then $job.write.bw / 1024
      else $job.write.bw / 1024 end)) | {name: .name, value: (.value / .len), unit: "MiB/s"}' ${output}/${job_name}trial*.json | tee ${output}/${job_name}_summary.json
}

# --------------------------------------------------------------------------------------------------
# Method to execute read benchmark using fio over different fio config files
read_bandwidth () {
  jobs_dir=./perf_testing/config/read

  for job_file in "${jobs_dir}"/*.fio; do
    job_name=$(basename "${job_file}")
    job_name="${job_name%.*}"

    echo "Running Read benchmark for ${job_name}"
    mount_blobfuse

    execute_test $job_file ${job_name}.dat

    blobfuse2 unmount all
    sleep 5

    rm -rf ~/.blobfuse2/*
  done
}

# --------------------------------------------------------------------------------------------------
# Method to execute write benchmark using fio over different fio config files
write_bandwidth () {
  jobs_dir=./perf_testing/config/write

  for job_file in "${jobs_dir}"/*.fio; do
    job_name=$(basename "${job_file}")
    job_name="${job_name%.*}"
    
    echo "Running Write benchmark for ${job_name}"
    mount_blobfuse

    execute_test $job_file ${job_name}.dat

    blobfuse2 unmount all
    sleep 5

    rm -rf ~/.blobfuse2/*
  done
}

# --------------------------------------------------------------------------------------------------
# Method to execute multi threaded benchmark using fio over different fio config files
high_thread_bandwidth () {
  jobs_dir=./perf_testing/config/high_threads

  for job_file in "${jobs_dir}"/*.fio; do
    job_name=$(basename "${job_file}")
    job_name="${job_name%.*}"
    
    echo "Running Write benchmark for ${job_name}"
    mount_blobfuse

    execute_test $job_file ${job_name}.dat

    blobfuse2 unmount all
    sleep 5

    rm -rf ~/.blobfuse2/*
  done
}

# --------------------------------------------------------------------------------------------------
# Method to prepare the system for test
prepare_system() {
  # Clean up logs and create output directory
  rm -rf blobfuse2.log
  rm -rf ${output}
  mkdir -p ${output}
  chmod 777 ${output}

  # Clean storage account before begining the test
  mount_blobfuse
  rm -rf ${mount_dir}/*

  blobfuse2 unmount all
  sleep 5
}


# --------------------------------------------------------------------------------------------------
# Prepare the system for test
prepare_system

# --------------------------------------------------------------------------------------------------
executed=1
if [[ ${type} == "write" ]] 
then
  # Execute write benchmark using fio
  write_bandwidth
  sleep 10
elif [[ ${type} == "read" ]] 
then
  # Execute read benchmark using fio
  read_bandwidth
  sleep 10
elif [[ ${type} == "highlyparallel" ]] 
then
  # Execute multi-threaded benchmark using fio
  high_thread_bandwidth
  sleep 10
else
  executed=0  
  echo "Invalid argument. Please provide either 'read' or 'write' or 'multi' as argument"
fi

# --------------------------------------------------------------------------------------------------
if [[ $executed -eq 1 ]] 
then
  # Merge all results and geenrate a json summary
  jq -n '[inputs]' ${output}/*_summary.json | tee ./${output}/results.json
fi

# --------------------------------------------------------------------------------------------------
