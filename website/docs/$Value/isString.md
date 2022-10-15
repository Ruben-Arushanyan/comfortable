---
sidebar_position: 3
description: 'Check if a value is a string primitive type.'
title: 'isString()'
keywords: ['string', 'is-string', 'string-type', 'check-value-string', 'javascript', 'comfortable', 'comfort', 'util', 'utils', 'utility', 'utilities', 'extras', 'helpers', 'stdlib', 'boost', 'oop', 'oop-in-javascript', 'object-oriented-programming', 'oop-principles', 'object-oriented']
---

Check if a value is a **string primitive type**.

## Examples

```js
import {$Value} from 'comfortable/$Value'

$Value('Hello').isString()
// true

$Value('').isString()
// true

$Value(123).isString()
// false

$Value(new String("Hello")).isString()
// false
```

## Syntax

### `.isString()`

#### Returns `<boolean>`

Returns `true` if the value is a **string primitive type**, else `false`.