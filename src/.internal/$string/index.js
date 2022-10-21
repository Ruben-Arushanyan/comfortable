
class $String {
    #value
    #originalValue
    constructor(value) {
        this.#originalValue = value
        this.#value = String(value)
    }

    get value() {
        return this.#value
    }

    titleCase() {
        const v = this.value
        const lowerCaseValue = $string(v).lowerCase()
        if (!$string(lowerCaseValue).isEmpty()) {
            let result = $string(lowerCaseValue[0]).upperCase()
            for (let i = 1; i < lowerCaseValue.length; ++i) {
                const prevChar = lowerCaseValue[i - 1]
                const currentChar = lowerCaseValue[i]
                const isWordFirstLetter = $string(currentChar).isLetter() && !$string(prevChar).isLetter()
                result += isWordFirstLetter ? $string(currentChar).upperCase() : currentChar
            }
            return result
        }
        return v
    }

    isLetter() {
        const v = this.value
        if (v.length === 1) {
            const s = $string(v)
            return s.lowerCase() !== s.upperCase()
        }
        return false
    }

    isEmpty() {
        const v = this.value
        return !v.length
    }

    upperCase() {
        const v = this.value
        return v.toUpperCase()
    }
    lowerCase() {
        const v = this.value
        return v.toLowerCase()
    }
}

export const $string = (...args) => new $String(...args)
