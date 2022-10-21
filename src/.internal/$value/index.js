
class $Value {
    #value
    #originalValue
    constructor(value) {
        this.#originalValue = value
        this.#value = value
    }

    get value() {
        return this.#value
    }

    isString() {
        const v = this.value
        return typeof v === 'string'
    }
}

export const $value = (...args) => new $Value(...args)