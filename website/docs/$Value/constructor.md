---
sidebar_position: 2
description: 'The $Value() constructor is used to create $Value objects.'
title: 'constructor'
keywords: ['constructor', 'value', 'js-value', 'any-js-value', 'javascript', 'comfortable', 'comfort', 'util', 'utils', 'utility', 'utilities', 'extras', 'helpers', 'stdlib', 'boost', 'oop', 'oop-in-javascript', 'object-oriented-programming', 'oop-principles', 'object-oriented']
---

The **$Value()** constructor is used to create [$Value](./index.md) objects.

## Examples

```js
import {$Value} from 'comfortable/$Value'

$Value('Hello')

$Value(123)

$Value(true)

$Value(null)

$Value({a: 1})

$Value(() => {})
```

## Syntax

### `$Value(value)`

#### Arguments

- **value** `<any>`  
    Any JavaScript value.
