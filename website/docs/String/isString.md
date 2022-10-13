---
sidebar_position: 1
description: 'JavaScript - Check if a value is a string primitive type.'
---

Check if a value is a **string primitive type**.

## Import

```js
import isString from 'comfortable/isString'
```

## Examples

```js
import isString from 'comfortable/isString'

isString('Hello')
// true

isString('')
// true

isString(123)
// false

isString(new String("Hello"))
// false
```

## Syntax

### `isString(value)`

#### Arguments

- **value** `<any>`  
    Any JavaScript value.

#### Returns `<boolean>`

Returns `true` if the value is a **string primitive type**, else `false`.
