// Crea una función que elimine todos los espacios de una frase
function removeSpaces(text) {
  return text
    .split(' ')
    .join('');
}

removeSpaces("lorem ipsum dolor"); // "loremipsumdolor"