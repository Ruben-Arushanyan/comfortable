import {$Value} from '../../.packed/$Value'

test('$Value.isString', () => {
    expect($Value(true).isString()).toBe(false)
    expect($Value(false).isString()).toBe(false)

    expect($Value(null).isString()).toBe(false)

    expect($Value(undefined).isString()).toBe(false)

    expect($Value(123).isString()).toBe(false)
    expect($Value(NaN).isString()).toBe(false)
    expect($Value(Infinity).isString()).toBe(false)
    expect($Value(-Infinity).isString()).toBe(false)

    expect($Value(111n).isString()).toBe(false)

    expect($Value('').isString()).toBe(true)
    expect($Value(' ').isString()).toBe(true)
    expect($Value('Hello').isString()).toBe(true)
    expect($Value('Hello Hello').isString()).toBe(true)

    expect($Value(Symbol()).isString()).toBe(false)

    expect($Value({}).isString()).toBe(false)
    expect($Value([]).isString()).toBe(false)
    expect($Value(/ab+c/).isString()).toBe(false)

    expect($Value(Object()).isString()).toBe(false)
    expect($Value(new Boolean()).isString()).toBe(false)
    expect($Value(new Number()).isString()).toBe(false)
    expect($Value(new String()).isString()).toBe(false)

    expect($Value({a: 1}).isString()).toBe(false)
    expect($Value(() => {}).isString()).toBe(false)
    expect($Value(function f(){}).isString()).toBe(false)
    expect($Value(class A {}).isString()).toBe(false)
})