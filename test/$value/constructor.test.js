import {$value} from '../../.packed/$value'

test('$value.constructor', () => {
    expect($value().value).toBe(undefined)
    expect($value('hello').value).toBe('hello')
})