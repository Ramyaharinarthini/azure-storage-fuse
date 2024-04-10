window.BENCHMARK_DATA = {
  "lastUpdate": 1712745632082,
  "repoUrl": "https://github.com/Azure/azure-storage-fuse",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "vibhansa@microsoft.com",
            "name": "vibhansa",
            "username": "vibhansa-msft"
          },
          "committer": {
            "email": "vibhansa@microsoft.com",
            "name": "vibhansa",
            "username": "vibhansa-msft"
          },
          "distinct": true,
          "id": "1a4e554337ce8799974951b862bc67522031adf1",
          "message": "Correcting bs in large write case",
          "timestamp": "2024-04-04T15:58:04+05:30",
          "tree_id": "4a43bfe9042ae83dab8725a2ba1ea42ed150b950",
          "url": "https://github.com/Azure/azure-storage-fuse/commit/1a4e554337ce8799974951b862bc67522031adf1"
        },
        "date": 1712228210476,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sequential_read",
            "value": 0.09237264668933333,
            "unit": "milliseconds"
          },
          {
            "name": "random_read",
            "value": 69.102910703463,
            "unit": "milliseconds"
          },
          {
            "name": "sequential_read_small_file",
            "value": 0.092863626107,
            "unit": "milliseconds"
          },
          {
            "name": "random_read_small_file",
            "value": 0.13744655439099998,
            "unit": "milliseconds"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 0.09200917992699999,
            "unit": "milliseconds"
          },
          {
            "name": "random_read_direct_io",
            "value": 72.49075391474766,
            "unit": "milliseconds"
          },
          {
            "name": "sequential_read_4_threads",
            "value": 0.17470297946866667,
            "unit": "milliseconds"
          },
          {
            "name": "sequential_read_16_threads",
            "value": 0.9887939912203335,
            "unit": "milliseconds"
          },
          {
            "name": "random_read_4_threads",
            "value": 75.59788254316534,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vibhansa@microsoft.com",
            "name": "vibhansa",
            "username": "vibhansa-msft"
          },
          "committer": {
            "email": "vibhansa@microsoft.com",
            "name": "vibhansa",
            "username": "vibhansa-msft"
          },
          "distinct": true,
          "id": "af6c4b7f5027b190ed6fd22b9411c121cde95161",
          "message": "Sync with main",
          "timestamp": "2024-04-04T21:19:24+05:30",
          "tree_id": "8d44ebd434f1348fa4eccb4120623d585257ea2e",
          "url": "https://github.com/Azure/azure-storage-fuse/commit/af6c4b7f5027b190ed6fd22b9411c121cde95161"
        },
        "date": 1712246931417,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sequential_read",
            "value": 0.10414171725733333,
            "unit": "milliseconds"
          },
          {
            "name": "random_read",
            "value": 72.529268732636,
            "unit": "milliseconds"
          },
          {
            "name": "sequential_read_small_file",
            "value": 0.099086034998,
            "unit": "milliseconds"
          },
          {
            "name": "random_read_small_file",
            "value": 0.21138560931633332,
            "unit": "milliseconds"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 0.09646497864033332,
            "unit": "milliseconds"
          },
          {
            "name": "random_read_direct_io",
            "value": 73.81312104925601,
            "unit": "milliseconds"
          },
          {
            "name": "sequential_read_4_threads",
            "value": 0.18145079937999997,
            "unit": "milliseconds"
          },
          {
            "name": "sequential_read_16_threads",
            "value": 1.0453324132596666,
            "unit": "milliseconds"
          },
          {
            "name": "random_read_4_threads",
            "value": 75.48258914304967,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vibhansa@microsoft.com",
            "name": "vibhansa",
            "username": "vibhansa-msft"
          },
          "committer": {
            "email": "vibhansa@microsoft.com",
            "name": "vibhansa",
            "username": "vibhansa-msft"
          },
          "distinct": true,
          "id": "efc39a9a7a9ade6bef2ade06f5134a61ca3708c8",
          "message": "Merge remote-tracking branch 'origin/main' into vibhansa/perftestrunner",
          "timestamp": "2024-04-09T21:50:08+05:30",
          "tree_id": "919ec536002591c79c706b99acb15eccd3353c73",
          "url": "https://github.com/Azure/azure-storage-fuse/commit/efc39a9a7a9ade6bef2ade06f5134a61ca3708c8"
        },
        "date": 1712680823817,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sequential_read",
            "value": 0.09788024972299998,
            "unit": "milliseconds"
          },
          {
            "name": "random_read",
            "value": 72.24777028490766,
            "unit": "milliseconds"
          },
          {
            "name": "sequential_read_small_file",
            "value": 0.09247800207700001,
            "unit": "milliseconds"
          },
          {
            "name": "random_read_small_file",
            "value": 0.139429245328,
            "unit": "milliseconds"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 0.14431907473733332,
            "unit": "milliseconds"
          },
          {
            "name": "random_read_direct_io",
            "value": 75.04025966577666,
            "unit": "milliseconds"
          },
          {
            "name": "sequential_read_4_threads",
            "value": 0.17881418975166666,
            "unit": "milliseconds"
          },
          {
            "name": "sequential_read_16_threads",
            "value": 1.0265282907916666,
            "unit": "milliseconds"
          },
          {
            "name": "random_read_4_threads",
            "value": 73.31610818890034,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vibhansa@microsoft.com",
            "name": "vibhansa",
            "username": "vibhansa-msft"
          },
          "committer": {
            "email": "vibhansa@microsoft.com",
            "name": "vibhansa",
            "username": "vibhansa-msft"
          },
          "distinct": true,
          "id": "2dbf6d58c1321a1f4bbe717f34f74bfed3983457",
          "message": "Updated",
          "timestamp": "2024-04-10T15:50:02+05:30",
          "tree_id": "a011193a4c059ca872fde238f30b693f3cbbd3ce",
          "url": "https://github.com/Azure/azure-storage-fuse/commit/2dbf6d58c1321a1f4bbe717f34f74bfed3983457"
        },
        "date": 1712745631770,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sequential_read",
            "value": 0.09446754568433331,
            "unit": "milliseconds"
          },
          {
            "name": "random_read",
            "value": 69.75949958607266,
            "unit": "milliseconds"
          },
          {
            "name": "sequential_read_small_file",
            "value": 0.08494615160133334,
            "unit": "milliseconds"
          },
          {
            "name": "random_read_small_file",
            "value": 0.18916874891799998,
            "unit": "milliseconds"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 0.09755476761433335,
            "unit": "milliseconds"
          },
          {
            "name": "random_read_direct_io",
            "value": 70.13836244849433,
            "unit": "milliseconds"
          },
          {
            "name": "sequential_read_4_threads",
            "value": 0.183623352178,
            "unit": "milliseconds"
          },
          {
            "name": "sequential_read_16_threads",
            "value": 1.1244443464606666,
            "unit": "milliseconds"
          },
          {
            "name": "random_read_4_threads",
            "value": 74.599374912259,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}