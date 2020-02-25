# RedKassa Phone Parser Default Set

This set with default formats and resolvers and also helper functions for RedKassa.

### ⚠️ Important

Required **@redkassa/phone-parser** (You should add @redkassa/phone-parser from npm)

## Installation

```bash
npm i @redkassa/phone-parser-default-set --save
```

or

```bash
yarn add @redkassa/phone-parser-default-set
```

## Usage

```javascript

import { parsePhoneNumber } from '@redkassa/phone-parser';
import { defaultFormats, defaultResolvers } from '@redkassa/phone-parser-default-set';

const result = parsePhoneNumber('12089999999', {
  formats: defaultFormats,
  resolvers: defaultResolvers,
});

```

## Helpers

### parsePriorityRU


```javascript

import { parsePhoneNumber } from '@redkassa/phone-parser';
import { parsePriorityRU, defaultFormats } from '@redkassa/phone-parser-default-set';

const result1 = parsePriorityRU(parsePhoneNumber, '9198221234', defaultFormats);

const result2 = parsePhoneNumber('9198221234', {
  formats: defaultFormats,
});

/*

result1 = {
  code: 'RU',
  dialCode: '+7',
  nationalNumber: '9198221234',
  formattedNumber: '+7 (919) 822 1234',
}

result2 = {
  code: 'IN',
  dialCode: '+91',
  nationalNumber: '98221234',
  formattedNumber: '+91 98221234',
}

*/

```