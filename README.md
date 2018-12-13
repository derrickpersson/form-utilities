[![Build Status](https://travis-ci.org/derrickpersson/form-utilities.svg?branch=master)](https://travis-ci.org/derrickpersson/form-utilities)

[![Coverage Status](https://coveralls.io/repos/github/derrickpersson/form-utilities/badge.svg)](https://coveralls.io/github/derrickpersson/form-utilities)

# Form Utility Helper Functions

```sh
npm install --save form-utilities
```

## Usage

```javascript
import { validPostalCode } from 'form-utilities';

const input = "V1J 4L2";

if(validPostalCode(input)) {
    // Do something
}

```

## Test

```sh
npm run test
```