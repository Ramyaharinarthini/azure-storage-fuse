window.BENCHMARK_DATA = {
  "lastUpdate": 1710847664434,
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
          "id": "9655fa496a1d7e09bd207e849d699f9475bf1010",
          "message": "Make write the last test case",
          "timestamp": "2024-03-15T15:28:45+05:30",
          "tree_id": "ca4ee27f4eac8d5db3140c08802b3d5984e8d09f",
          "url": "https://github.com/Azure/azure-storage-fuse/commit/9655fa496a1d7e09bd207e849d699f9475bf1010"
        },
        "date": 1710500001677,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "seq_write_112_thread",
            "value": 527.7600413758813,
            "unit": "milliseconds"
          },
          {
            "name": "seq_read_128_thread",
            "value": 433.11232031288904,
            "unit": "milliseconds"
          },
          {
            "name": "rand_read_128_thread",
            "value": 8371.641237594076,
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
          "id": "3f6a9fe604bef52d7cb679a7d108023e4336708c",
          "message": "Silent the clogs in case of creation",
          "timestamp": "2024-03-18T12:04:44+05:30",
          "tree_id": "9c2ea968b5fa3bff2feea572aa84a9cba678b72c",
          "url": "https://github.com/Azure/azure-storage-fuse/commit/3f6a9fe604bef52d7cb679a7d108023e4336708c"
        },
        "date": 1710746900641,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "seq_write_112_thread",
            "value": 510.4481682794656,
            "unit": "milliseconds"
          },
          {
            "name": "seq_read_128_thread",
            "value": 467.19214589371603,
            "unit": "milliseconds"
          },
          {
            "name": "rand_read_128_thread",
            "value": 8500.997995307915,
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
          "id": "3bc15cf143c5c8ccfbe50dce3f4ee190c9a6fe02",
          "message": "Reset open files setting",
          "timestamp": "2024-03-19T15:31:59+05:30",
          "tree_id": "bcd3da2f495e1f5e3719d8bae7fb32b00f9ec479",
          "url": "https://github.com/Azure/azure-storage-fuse/commit/3bc15cf143c5c8ccfbe50dce3f4ee190c9a6fe02"
        },
        "date": 1710847664063,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "seq_write_112_thread",
            "value": 497.7382500808194,
            "unit": "milliseconds"
          },
          {
            "name": "seq_read_128_thread",
            "value": 456.08583199843434,
            "unit": "milliseconds"
          },
          {
            "name": "rand_read_128_thread",
            "value": 8598.78776564322,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}