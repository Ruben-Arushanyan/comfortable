---
sidebar_position: 3
description: 'Check if a value is a string primitive type.'
title: 'isString()'
keywords: ['string', 'is-string', 'string-type', 'check-value-string', 'javascript', 'comfortable', 'comfort', 'util', 'utils', 'utility', 'utilities', 'extras', 'helpers', 'stdlib', 'boost', 'oop', 'oop-in-javascript', 'object-oriented-programming', 'oop-principles', 'object-oriented']
---

Check if a value is a **string primitive type**.

## Examples

```js
import {$value} from 'comfortable/$value'

$value('Hello').isString()
// true

$value('').isString()
// true

$value(123).isString()
// false

$value(new String("Hello")).isString()
// false
```

## Syntax

### `.isString()`

#### Returns `<boolean>`

Returns `true` if the value is a **string primitive type**, else `false`.