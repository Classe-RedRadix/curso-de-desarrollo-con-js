const flatten = (array) => {

  const result = []

  for(const element of array) {
    for(const subElement of element) {
      result.push(subElement)
    }
  }

  /*for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array[i].length; j++) {
      result.push(array[i][j])
    }
  }*/

  print.log(result);

}

flatten([
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9']
])

flatten(1)