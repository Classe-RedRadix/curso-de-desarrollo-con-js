const sumDeep = (lista, sum=0) => {

  for (const item of lista ) {
    sum = Array.isArray(item) ? sumDeep(item, sum) : sum+item;
  }
  return sum;
}

print.log(sumDeep([
  1,
  [2, 3],
  [ [4,5] ], 5
])
)