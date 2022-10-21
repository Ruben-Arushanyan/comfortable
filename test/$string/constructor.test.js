import {$string} from '../../.packed/$string'

test('$string.constructor', () => {
    expect($string().value).toBe('undefined')
    expect($string('hello').value).toBe('hello')
    expect($string(123).value).toBe('123')
})