// Hacerlo en clase

const listAr = (list) => {
    const [firstValue, ...restValues] = list
    const valuesIndex = restValues.length - 1

    if(!list.length) return null
    if(list.length === 1) return firstValue
    return `${firstValue}, ${restValues[valuesIndex]}`
}


console.log(listAr([1,2,3,4,5,6]))
console.log(listAr([1]))
console.log(listAr([]))