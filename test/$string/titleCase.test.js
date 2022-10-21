import { $string } from '../../.packed/$string'

test('$string.titleCase', () => {
    expect($string('').titleCase()).toBe('')
    expect($string('hello world').titleCase()).toBe('Hello World')
    expect($string('HELLO world').titleCase()).toBe('Hello World')
    expect($string('HELLO WORLD').titleCase()).toBe('Hello World')

    expect($string('hello.world').titleCase()).toBe('Hello.World')
    expect($string('hello-world').titleCase()).toBe('Hello-World')
    expect($string('hello_world').titleCase()).toBe('Hello_World')
    expect($string('hello,world').titleCase()).toBe('Hello,World')
    expect($string('hello2022world').titleCase()).toBe('Hello2022World')

    expect($string('բարեվ աշխարհ').titleCase()).toBe('Բարեվ Աշխարհ')
    expect($string('բարեվ     աշխարհ h e    ll o').titleCase()).toBe('Բարեվ     Աշխարհ H E    Ll O')
})