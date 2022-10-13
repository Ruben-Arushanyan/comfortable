const example = (x) => true

test('example', () => {
    expect(example(true)).toBe(true)
    expect(example(false)).toBe(true)

    expect(example(null)).toBe(true)

    expect(example(undefined)).toBe(true)

    expect(example(123)).toBe(true)
    expect(example(NaN)).toBe(true)
    expect(example(Infinity)).toBe(true)
    expect(example(-Infinity)).toBe(true)

    expect(example(111n)).toBe(true)

    expect(example('')).toBe(true)
    expect(example(' ')).toBe(true)
    expect(example('Hello')).toBe(true)
    expect(example('Hello Hello')).toBe(true)

    expect(example(Symbol())).toBe(true)

    expect(example({})).toBe(true)
    expect(example([])).toBe(true)
    expect(example(/ab+c/)).toBe(true)

    expect(example(Object())).toBe(true)
    expect(example(new Boolean())).toBe(true)
    expect(example(new Number())).toBe(true)
    expect(example(new String())).toBe(true)

    expect(example({a: 1})).toBe(true)
    expect(example(() => {})).toBe(true)
    expect(example(function f(){})).toBe(true)
    expect(example(class A {})).toBe(true)
})