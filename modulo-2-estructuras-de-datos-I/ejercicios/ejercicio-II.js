const cut = (array, start, end) => {
  const result = []
  const finalIndex = end || array.length - 1

  for (let i = start; i <= array.length; i++) {
    if (i <= finalIndex) result.push(array[i])
  }

  return result
}

console.log(cut(['a', 'b', 'c', 'd'], 1, 2)) // ["b", "c"]
console.log(cut(['a', 'b', 'c', 'd'], 1)) // ["b", "c", "d"]
