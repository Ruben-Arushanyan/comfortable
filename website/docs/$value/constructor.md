---
sidebar_position: 2
description: 'The $value() constructor is used to create $value objects.'
title: 'constructor'
keywords: ['constructor', 'value', 'js-value', 'any-js-value', 'javascript', 'comfortable', 'comfort', 'util', 'utils', 'utility', 'utilities', 'extras', 'helpers', 'stdlib', 'boost', 'oop', 'oop-in-javascript', 'object-oriented-programming', 'oop-principles', 'object-oriented']
---

The **$value()** constructor is used to create [$value](./) objects.

## Examples

```js
import {$value} from 'comfortable/$value'

const v1 = $value('Hello')
console.log(v1.value) // 'Hello'

const v2 = $value(123)
console.log(v2.value) // 123

const v3 = $value(true)
console.log(v3.value) // true

const v4 = $value(null)
console.log(v4.value) // null

const v5 = $value({a: 1})
console.log(v5.value) // {a: 1}

const v6 = $value(() => {})
console.log(v6.value) // () => {}
```

## Syntax

### `$value(value)`

#### Arguments

- **value** `<any>`  
    Any JavaScript value.
