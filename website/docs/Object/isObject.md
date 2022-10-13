---
sidebar_position: 1
description: 'JavaScript - Check if a value is a reference (object type). Including functions and classes.'
---

Check if a value is a **reference (object type)**. Including functions and classes.

## Import

```js
import isObject from 'comfortable/isObject'
```

## Examples

```js
import isObject from 'comfortable/isObject'

isObject({})
// true

isObject([1, 2, 3])
// true

isObject(function () {})
// true

isObject(() => {})
// true

isObject(class {})
// true

isObject(new String("Hello"))
// true

isObject(/ab+c/)
// true

isObject(null)
// false

isObject('Hello')
// false

isObject(123)
// false
```

## Syntax

### `isObject(value)`

#### Arguments

- **value** `<any>`  
    Any JavaScript value.

#### Returns `<boolean>`

Returns `true` if the value is a reference (object type), else `false`.
