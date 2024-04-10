window.BENCHMARK_DATA = {
  "lastUpdate": 1712768098453,
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
        "date": 1712228208615,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read",
            "value": 2482.5139973958335,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.6279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 2336.6272786458335,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 1649.4833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2708.4593098958335,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.4537760416666665,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_4_threads",
            "value": 4761.986979166667,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_16_threads",
            "value": 3977.8662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_4_threads",
            "value": 13.228515625,
            "unit": "MiB/s"
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
        "date": 1712246929661,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read",
            "value": 2186.5791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.4495442708333335,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 2211.4801432291665,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 1105.3404947916667,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2586.2327473958335,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.38671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_4_threads",
            "value": 4783.632161458333,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_16_threads",
            "value": 3722.6256510416665,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_4_threads",
            "value": 13.223958333333334,
            "unit": "MiB/s"
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
        "date": 1712680821983,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read",
            "value": 2345.607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.4596354166666665,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 2386.4059244791665,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 1628.9202473958333,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1809.7392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.3313802083333335,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_4_threads",
            "value": 4668.119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_16_threads",
            "value": 3796.8642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_4_threads",
            "value": 13.612955729166666,
            "unit": "MiB/s"
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
        "date": 1712745629722,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read",
            "value": 2391.1087239583335,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.5846354166666665,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 2555.4449869791665,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 1226.9000651041667,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2563.1975911458335,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.5719401041666665,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_4_threads",
            "value": 4561.980143229167,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_16_threads",
            "value": 3493.0120442708335,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_4_threads",
            "value": 13.377604166666666,
            "unit": "MiB/s"
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
          "id": "c0b0c7080e461377d2333ac1a44a32ee94ba6578",
          "message": "Add more logs",
          "timestamp": "2024-04-10T21:29:14+05:30",
          "tree_id": "85dc2b3d9872cab72549fd5303f2595e131c3f3d",
          "url": "https://github.com/Azure/azure-storage-fuse/commit/c0b0c7080e461377d2333ac1a44a32ee94ba6578"
        },
        "date": 1712766182909,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read",
            "value": 2571.8304036458335,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.2412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 2825.6110026041665,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 770.732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2282.6569010416665,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.5231119791666665,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_4_threads",
            "value": 4998.3857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_16_threads",
            "value": 3623.8912760416665,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_4_threads",
            "value": 12.603190104166666,
            "unit": "MiB/s"
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
          "id": "c0b0c7080e461377d2333ac1a44a32ee94ba6578",
          "message": "Add more logs",
          "timestamp": "2024-04-10T21:29:14+05:30",
          "tree_id": "85dc2b3d9872cab72549fd5303f2595e131c3f3d",
          "url": "https://github.com/Azure/azure-storage-fuse/commit/c0b0c7080e461377d2333ac1a44a32ee94ba6578"
        },
        "date": 1712768097240,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read",
            "value": 2366.8011067708335,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.4401041666666665,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 2677.107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 1400.6891276041667,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2289.2317708333335,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.4016927083333335,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_4_threads",
            "value": 5037.4921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_16_threads",
            "value": 3686.1565755208335,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_4_threads",
            "value": 12.777669270833334,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}