import isString from '../../.packed/isString'

test('isString', () => {
    expect(isString(true)).toBe(false)
    expect(isString(false)).toBe(false)

    expect(isString(null)).toBe(false)

    expect(isString(undefined)).toBe(false)

    expect(isString(123)).toBe(false)
    expect(isString(NaN)).toBe(false)
    expect(isString(Infinity)).toBe(false)
    expect(isString(-Infinity)).toBe(false)

    expect(isString(111n)).toBe(false)

    expect(isString('')).toBe(true)
    expect(isString(' ')).toBe(true)
    expect(isString('Hello')).toBe(true)
    expect(isString('Hello Hello')).toBe(true)

    expect(isString(Symbol())).toBe(false)

    expect(isString({})).toBe(false)
    expect(isString([])).toBe(false)
    expect(isString(/ab+c/)).toBe(false)

    expect(isString(Object())).toBe(false)
    expect(isString(new Boolean())).toBe(false)
    expect(isString(new Number())).toBe(false)
    expect(isString(new String())).toBe(false)

    expect(isString({a: 1})).toBe(false)
    expect(isString(() => {})).toBe(false)
    expect(isString(function f(){})).toBe(false)
    expect(isString(class A {})).toBe(false)
})