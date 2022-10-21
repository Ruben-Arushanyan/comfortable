---
sidebar_position: 3
description: 'In JavaScript, returns a title-cased version of the string where words start with an uppercase character and the remaining characters are lowercase.'
title: 'titleCase()'
keywords: ['title-case', 'js-title-case', 'python-title', 'string', 'javascript', 'comfortable', 'comfort', 'util', 'utils', 'utility', 'utilities', 'extras', 'helpers', 'stdlib', 'boost', 'oop', 'oop-in-javascript', 'object-oriented-programming', 'oop-principles', 'object-oriented']
---

Returns a **title-cased** version of the string where words start with an uppercase character and the remaining characters are lowercase.

## Examples

```js
import {$string} from 'comfortable/$string'

$string('hello world').titleCase() // 'Hello World'
$string('HeLLo wORlD').titleCase() // 'Hello World'
$string('բարեվ աշխարհ').titleCase() // 'Բարեվ Աշխարհ'

$string('hello.world').titleCase() // 'Hello.World'
$string('hello-world').titleCase() // 'Hello-World'
$string('hello_world').titleCase() // 'Hello_World'
$string('hello,world').titleCase() // 'Hello,World'
$string('hello2022world').titleCase() // 'Hello2022World')

```

## Syntax

### `.titleCase()`

#### Returns `<string>`

Returns a **title-cased** version of the string where words start with an uppercase character and the remaining characters are lowercase.