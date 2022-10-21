---
sidebar_position: 1
title: Introduction
---

# Comfortable JS

## Description

**Comfortable JS** is a JavaScript library that provides **utilities** for common programming tasks, that make coding in JavaScript **easier** and **cleaner**.

**ComfortableJS** uses **Object-oriented programming (OOP)** approach to build its libraries: Unlike other similar libraries that use the functional programming approach, for example, the popular [Lodash](https://github.com/lodash/lodash) library.

## Installation

```
npm install comfortable
```

## Example

```js
import {$string} from 'comfortable/$string'
import {$value} from 'comfortable/$value'

$string('hello world').titleCase() // Hello World

$value(123).isString() // false
```

## References

- [$string](./$string/)
    - [constructor](./$string/constructor)
    - [titleCase()](./$string/titleCase)
- [$value](./$value/)
    - [constructor](./$value/constructor)
    - [isString()](./$value/isString)

