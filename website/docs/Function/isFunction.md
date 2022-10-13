---
sidebar_position: 1
description: 'JavaScript - Check if a value is a function type.'
---

Check if a value is a **function type**.

## Import

```js
import isFunction from 'comfortable/isFunction'
```

## Examples

```js
import isFunction from 'comfortable/isFunction'

isFunction(() => {})
// true

isFunction(function f(){})
// true

isFunction(class A {})
// true

isFunction({})
// false

isFunction('Hello')
// false
```

## Syntax

### `isFunction(value)`

#### Arguments

- **value** `<any>`  
    Any JavaScript value.

#### Returns `<boolean>`

Returns `true` if the value is a **function type**, else `false`.
