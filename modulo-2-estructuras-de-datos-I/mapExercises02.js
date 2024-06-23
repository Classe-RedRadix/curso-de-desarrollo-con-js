const firstCharacter = (list) => {
  return list.map(phrase => phrase
    .split(' ')
    .map(word => word[0])
    .join('')
  )
}

const getNames = (list) =>
  list
    .map(obj => obj?.name)
    .filter(Boolean)

print.log(firstCharacter(['lorem ipsum dolor', 'hello world']))
//console.log(firstCharacter('lorem ipsum dolor'))
print.log(getNames([{name: 'Alberto'}, {}, {name: 'Fran'}]))