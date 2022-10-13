export default x => {
    const type = typeof x
    return x != null && (type === 'object' || type === 'function')
}