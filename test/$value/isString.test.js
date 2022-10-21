import {$value} from '../../.packed/$value'

test('$value.isString', () => {
    expect($value(true).isString()).toBe(false)
    expect($value(false).isString()).toBe(false)

    expect($value(null).isString()).toBe(false)

    expect($value(undefined).isString()).toBe(false)

    expect($value(123).isString()).toBe(false)
    expect($value(NaN).isString()).toBe(false)
    expect($value(Infinity).isString()).toBe(false)
    expect($value(-Infinity).isString()).toBe(false)

    expect($value(111n).isString()).toBe(false)

    expect($value('').isString()).toBe(true)
    expect($value(' ').isString()).toBe(true)
    expect($value('Hello').isString()).toBe(true)
    expect($value('Hello Hello').isString()).toBe(true)

    expect($value(Symbol()).isString()).toBe(false)

    expect($value({}).isString()).toBe(false)
    expect($value([]).isString()).toBe(false)
    expect($value(/ab+c/).isString()).toBe(false)

    expect($value(Object()).isString()).toBe(false)
    expect($value(new Boolean()).isString()).toBe(false)
    expect($value(new Number()).isString()).toBe(false)
    expect($value(new String()).isString()).toBe(false)

    expect($value({a: 1}).isString()).toBe(false)
    expect($value(() => {}).isString()).toBe(false)
    expect($value(function f(){}).isString()).toBe(false)
    expect($value(class A {}).isString()).toBe(false)
})