const getFirstAndLastElements = array => {
  if (array.length === 0) return
  if (array.length === 1) {
    console.log(array[0])
    return
  }

  const firstElement = array[0]
  const lastElement = array[array.length - 1]

  console.log(firstElement, lastElement)
}

getFirstAndLastElements([1, 2, 3, 4, 5])
