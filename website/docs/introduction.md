---
sidebar_position: 1
title: Introduction
---

# Comfortable JS

## Description

**Comfortable JS** is a JavaScript library that provides **utilities** for common programming tasks, that make coding in JavaScript **easier** and **cleaner**.

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

