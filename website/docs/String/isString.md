---
sidebar_position: 1
---

Check if a variable is a **primitive string** type.

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

#### Returns

`<boolean>` Returns **true** if the value is a primitive string, else **false**.
