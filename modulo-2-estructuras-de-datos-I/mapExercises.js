const map01 = (array) => {
  return array.map(item => item/2)
}

const map02 = (array) => {
  return array.map(item => item.toString())
}

const map03 = (array) => {
  return array.map(item => item > 0 ? '-' : '+')
}

print.log(map01([8,12, 20]))
print.log(map02([1,7,50]))
print.log(map03([-8, 12, 20]))