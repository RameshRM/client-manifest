# client-manifest

## Summary:

This project is to identify all the `client API manifests` available for all the clients.

The client manifests are mapped by `clientIds` and the `api URI`

## Scope:

The scope of this application to achieve the below,

1. Provide ability to generate and download **API manifests** for the client applications (mostly browsers now)
2. Provide **`checksum`** of the **API Manifest** to compare the version downloaded by the client is active.
3. Generate a **Image beacon** which sends the version as the payload and compares the version with the server.
4. Version *mismatch* will show a big Red bar in the client screen.


## Routes

1. [/manifest](manifest) - Returns all the client api manifests
2. [/][home] - Simple client HTML rendered to download the manifest and fires a Image beacon to check the Version of the manifest is current.


## Installation

```
git clone https://github.com/RameshRM/client-manifest.git

cd client-manifest
```

> You would have guessed now :) Install

```
npm install
node .
```

## Test

1. Open your browser and type http://localhost:55909/

> You can see the API Manifest in the payload

2. Open your browser and type http://localhost:55909/?v=1

> Server detects invalid version and alerts.
