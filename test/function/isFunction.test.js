import isFunction from '../../.packed/isFunction'

test('isFunction', () => {
    expect(isFunction(true)).toBe(false)
    expect(isFunction(false)).toBe(false)

    expect(isFunction(null)).toBe(false)

    expect(isFunction(undefined)).toBe(false)

    expect(isFunction(123)).toBe(false)
    expect(isFunction(NaN)).toBe(false)
    expect(isFunction(Infinity)).toBe(false)
    expect(isFunction(-Infinity)).toBe(false)

    expect(isFunction(111n)).toBe(false)

    expect(isFunction('')).toBe(false)
    expect(isFunction(' ')).toBe(false)
    expect(isFunction('Hello')).toBe(false)
    expect(isFunction('Hello Hello')).toBe(false)

    expect(isFunction(Symbol())).toBe(false)

    expect(isFunction({})).toBe(false)
    expect(isFunction([])).toBe(false)
    expect(isFunction(/ab+c/)).toBe(false)

    expect(isFunction(Object())).toBe(false)
    expect(isFunction(new Boolean())).toBe(false)
    expect(isFunction(new Number())).toBe(false)
    expect(isFunction(new String())).toBe(false)

    expect(isFunction({a: 1})).toBe(false)
    expect(isFunction(() => {})).toBe(true)
    expect(isFunction(function f(){})).toBe(true)
    expect(isFunction(class A {})).toBe(true)
})
