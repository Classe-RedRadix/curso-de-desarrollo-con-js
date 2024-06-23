const flattenDeep = (lista) => {
  const result = [];

  const flatten = (array) => {
    const flattedArray = []
    for(const element of array) {
      for(const subElement of element) {
        result.push(subElement)
      }
    }
    return flattedArray;
  }

  for(const element of lista) {
    if(Array.isArray(element)) {
      flatten(element);
    } else {
      result.push(element);
    }
  }
  return result;
}

//push
//isArray


flattenDeep([
  1,
  [2, 3],
  [
    [4,5],
    [6],
    [[[8]]]
  ]
])
