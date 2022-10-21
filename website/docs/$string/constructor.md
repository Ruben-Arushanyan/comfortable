---
sidebar_position: 2
description: 'The $string() constructor is used to create $string objects.'
title: 'constructor'
keywords: ['constructor', 'string', 'js-string', 'javascript', 'comfortable', 'comfort', 'util', 'utils', 'utility', 'utilities', 'extras', 'helpers', 'stdlib', 'boost', 'oop', 'oop-in-javascript', 'object-oriented-programming', 'oop-principles', 'object-oriented']
---

The **$string()** constructor is used to create [$string](./) objects.

## Examples

```js
import {$string} from 'comfortable/$string'

const s1 = $string('hello world')
console.log(s1.value) // 'hello world'

const s2 = $string(123)
console.log(s2.value) // '123'

const s3 = $string({})
console.log(s3.value) // '[object Object]'

```

## Syntax

### `$string(value)`

#### Arguments

- **value** `<any>`  
    Any JavaScript value will be converted to a string.
