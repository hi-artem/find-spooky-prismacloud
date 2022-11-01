# find-openssl-prismacloud

## Why do you need this?

OpenSSL has announced [a major bug affecting 3.x version](https://mta.openssl.org/pipermail/openssl-announce/2022-October/000238.html), known as SpookySSL. Lookup CVE-2022-3786 and CVE-2022-3602 for further details.

Unfortunately for Palo Alto Networks Prisma Cloud Compute users, this tool doesn't have a way to search all images by a package name. 

This script will search all your deployed containers, and dump them in a single json.

The script is targeting affected version of `openssl`, and binaries known to be compiled with vulnerable `openssl` version, like nodejs. See [this document](https://github.com/NCSC-NL/OpenSSL-2022/tree/main/software) for more information on affected software.

## How to run this?

You need `nodejs`, and `npm` or `yarn`. 

First, install dependencies by running `npm/yarn install`.

Second, export some of the important env variables:

```sh
export BASIC_AUTH_TOKEN=<YOUR-TOKEN-GOES-HERE>
export BASE_URL='https://prismacloudconsole.example.com/'
```

Finally, run the script:

```sh
node index.js
```

The report should contain affected containers as list of JSON objects.
