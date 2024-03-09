#!/bin/bash
set -e

# Each test will be performed 3 times
iterations=3

# Mount path for blobfuse is supplied on command line while executing this script
mount_dir=$1

# Name of tests we are going to perform
test_name=$2

# Directory where output logs will be generated by fio
output="./${test_name}"

# --------------------------------------------------------------------------------------------------
# Method to mount blobfuse and wait for system to stabilize
mount_blobfuse() {
  extra_opts=$1
  set +e

  blobfuse2 mount ${mount_dir} --config-file=./config.yaml ${extra_opts}
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
      else $job.write.bw / 1024 end)) | {name: .name, value: (.value / .len), unit: "MiB/s"}' ${output}/${job_name}trial*.json | tee ${output}/${job_name}_bandwidth_summary.json

  # From the fio output get the latency details and put it in a summary file
  jq -n 'reduce inputs.jobs[] as $job (null; .name = $job.jobname | .len += 1 | .value += (if ($job."job options".rw == "read")
    then $job.read.lat_ns.mean / 1000000
    elif ($job."job options".rw == "randread") then $job.read.lat_ns.mean / 1000000
    elif ($job."job options".rw == "randwrite") then $job.write.lat_ns.mean / 1000000
    else $job.write.lat_ns.mean / 1000000 | {name: .name, value: (.value / .len), unit: "milliseconds"}' ${output}/${job_name}trial*.json | tee ${output}/${job_name}_latency_summary.json
}

# --------------------------------------------------------------------------------------------------
# Method to iterate over fio files in given directory and execute each test
iterate_fio_files() {
  jobs_dir=$1
  output_field=$2

  for job_file in "${jobs_dir}"/*.fio; do
    job_name=$(basename "${job_file}")
    job_name="${job_name%.*}"
    
    mount_blobfuse

    execute_test $job_file ${job_name}.dat ${output_field}

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

  # Clean storage account before beginning the test
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
if [[ ${test_name} == "write" ]] 
then
  # Execute write benchmark using fio
  echo "Running Write test cases"
  iterate_fio_files "./perf_testing/config/write" "bandwidth"
elif [[ ${test_name} == "read" ]] 
then
  # Execute read benchmark using fio
  echo "Running Read test cases"
  iterate_fio_files "./perf_testing/config/read" "bandwidth"
elif [[ ${test_name} == "highlyparallel" ]] 
then
  # Execute multi-threaded benchmark using fio
  echo "Running Highly Parallel test cases"
  iterate_fio_files "./perf_testing/config/high_threads" "bandwidth"
elif [[ ${test_name} == "highlyparallel" ]] 
then  
  # Execute file create tests
  echo "Running Create test cases"
  iterate_fio_files "./perf_testing/config/create" "latency"
else
  executed=0  
  echo "Invalid argument. Please provide either 'read' or 'write' or 'multi' as argument"
fi

# --------------------------------------------------------------------------------------------------
if [[ $executed -eq 1 ]] 
then
  # Merge all results and generate a json summary for bandwidth
  jq -n '[inputs]' ${output}/*_bandwidth_summary.json | tee ./${output}/bandwidth_results.json

  # Merge all results and generate a json summary for latency
  jq -n '[inputs]' ${output}/*_latency_summary.json | tee ./${output}/latency_results.json
fi

# --------------------------------------------------------------------------------------------------
