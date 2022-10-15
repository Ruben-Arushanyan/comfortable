import {$Value} from '../../.packed/$Value'

test('$Value.constructor', () => {
    expect($Value().value).toBe(undefined)
    expect($Value('hello').value).toBe('hello')
})