
class $Value {
    #value
    constructor(value) {
        this.#value = value
    }

    get value() {
        return this.#value
    }

    isString() {
        return typeof this.value === 'string'
    }
}

const Factory = (...args) => new $Value(...args)
export {Factory as $Value}