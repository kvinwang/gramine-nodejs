# Gramine-NodeJS: Secure Node.js Execution using Gramine

## Introduction

This project demonstrates how to run Node.js applications securely inside Gramine.

## Prerequisites
- Operating System: Ubuntu 20.04 (other Linux distributions might work but I haven't tested)

## Getting Started

## Download the prebuilt package
### Downloading the Prebuilt Package

1. Visit the project's [release page on GitHub](https://github.com/kvinwang/gramine-nodejs/releases).
2. Download the prebuilt archive suitable for your system.
3. Extract the downloaded archive and navigate into the newly created directory.

### Running Your Node.js Application

Before you run your application, replace the default `index.js` with the `.js` file you wish to execute.

#### With SGX Support

To execute your Node.js application within an SGX enclave, utilize the following command:

```bash
./gramine-sgx node
```

#### Without SGX (Direct Mode)
If you prefer to run your application without SGX, you can use:
```bash
./gramine-direct node
```

