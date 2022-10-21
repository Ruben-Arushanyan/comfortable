
class $string {
    #value
    constructor(value) {
        this.#value = value
    }

    get value() {
        return this.#value
    }
}

const factory = (...args) => new $string(...args)
export {factory as $string}
