// Escribe una función que dados un array y una longitud `size`
// divida la lista en múltiples subarrays de longitud `size`

function chunk(array, size) {
  let result = [];
  for (let i = 0; i <= array.length-1; i = i + size) {
    let chunkToInsert = array.slice(i, i + size);
    result.push(chunkToInsert);
  }
  return result
}

print.log(chunk([1, 2, 3, 4], 2))

// Ejemplos
chunk([1, 2, 3, 4], 2) === [[ 1, 2], [3, 4]]
//chunk([1, 2, 3, 4, 5], 2) === [[ 1, 2], [3, 4], [5]]
//chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) === [[ 1, 2, 3], [4, 5, 6], [7, 8]]
//chunk([1, 2, 3, 4, 5], 4) === [[ 1, 2, 3, 4], [5]]
//chunk([1, 2, 3, 4, 5], 10) === [[ 1, 2, 3, 4, 5]]
