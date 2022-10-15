# [Comfortable JS](https://comfortable.js.org)
> You can find the full documentation on the [website](https://comfortable.js.org)

## Description

**Comfortable JS** is a JavaScript library that provides **utilities** for common programming tasks, that make coding in JavaScript **easier** and **cleaner**.

**ComfortableJS** uses **Object-oriented programming (OOP)** approach to build its libraries: Unlike other similar libraries that use the functional programming approach, for example, the popular *Lodash* library.

## Installation

```
npm install comfortable
```

## Example

```js
import isObject from 'comfortable/isObject'

isObject(null) // false
isObject('Hello') // false
isObject({}) // true
isObject([1, 2, 3]) // true
isObject(function () {}) // true
```

## [Documentation](https://comfortable.js.org)

- ### [Introduction](https://comfortable.js.org/docs/introduction)
- ### Function
    - [isFunction](https://comfortable.js.org/docs/Function/isFunction)
- ### Object
    - [isObject](https://comfortable.js.org/docs/Object/isObject)
- ### String
    - [isString](https://comfortable.js.org/docs/String/isString)


</br>

## [Contributing](https://github.com/ruben-arushanyan/comfortable/blob/master/CONTRIBUTING.md)

Read our [contributing guide](https://github.com/ruben-arushanyan/comfortable/blob/master/CONTRIBUTING.md) to learn about our development process.

## [Code of Conduct](https://github.com/ruben-arushanyan/comfortable/blob/master/CODE_OF_CONDUCT.md)

This project has adopted the [Contributor Covenant](https://www.contributor-covenant.org) as its Code of Conduct, and we expect project participants to adhere to it. Please read the [full text](https://github.com/ruben-arushanyan/comfortable/blob/master/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Authors

- [Ruben Arushanyan](https://github.com/ruben-arushanyan)

## License

[MIT License](https://github.com/Ruben-Arushanyan/comfortable/blob/master/LICENSE)