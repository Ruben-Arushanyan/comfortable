import isObject from '../../.packed/isObject'

test('isObject', () => {
    expect(isObject(true)).toBe(false)
    expect(isObject(false)).toBe(false)

    expect(isObject(null)).toBe(false)

    expect(isObject(undefined)).toBe(false)

    expect(isObject(123)).toBe(false)
    expect(isObject(NaN)).toBe(false)
    expect(isObject(Infinity)).toBe(false)
    expect(isObject(-Infinity)).toBe(false)

    expect(isObject(111n)).toBe(false)

    expect(isObject('')).toBe(false)
    expect(isObject(' ')).toBe(false)
    expect(isObject('Hello')).toBe(false)
    expect(isObject('Hello Hello')).toBe(false)

    expect(isObject(Symbol())).toBe(false)

    expect(isObject({})).toBe(true)
    expect(isObject([])).toBe(true)
    expect(isObject(/ab+c/)).toBe(true)

    expect(isObject(Object())).toBe(true)
    expect(isObject(new Boolean())).toBe(true)
    expect(isObject(new Number())).toBe(true)
    expect(isObject(new String())).toBe(true)

    expect(isObject({a: 1})).toBe(true)
    expect(isObject(() => {})).toBe(true)
    expect(isObject(function f(){})).toBe(true)
    expect(isObject(class A {})).toBe(true)
})