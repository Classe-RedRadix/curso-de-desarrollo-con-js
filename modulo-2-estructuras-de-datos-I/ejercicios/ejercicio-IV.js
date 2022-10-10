// Crea aquí tu función flattenDeep
const flattenDeep = (array) => {
    const arrayFlat = []
    array.forEach(item => 
        Array.isArray(item) ? arrayFlat.push(...flattenDeep(item)) : arrayFlat.push(item)
    )
    return arrayFlat
}
console.log(flattenDeep([1, [2, 3], [[4, 5], [6]], [[[8]]]]));