// const flattenDeep = array => {
//   const arrayOfStringNumbers = String(array).split(',')
//   return arrayOfStringNumbers.map(item => Number(item))
// }

const result = []

const flattenDeep = array => {
  array.forEach(element => {
    if (Array.isArray(element)) {
      flattenDeep(element)
    } else {
      result.push(element)
    }
  })
  return result
}

console.log(flattenDeep([1, [2, 3], [[4, 5], [6]], [[[8]]]]))
