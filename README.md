# find-openssl-prismacloud

## Why do you need this?

OpenSSL is [about to announce a major bug affecting 3.x version](https://mta.openssl.org/pipermail/openssl-announce/2022-October/000238.html).

Unfortunately for Palo Alto Networks Prisma Cloud Compute users, this tool doesn't have a way to search all images by a package name. 

This script will search all your deployed containers, and dump them in a single json.

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
