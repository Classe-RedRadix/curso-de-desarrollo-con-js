// Crea una función que elimine todos los espacios de una frase
function removeSpaces(words) {
  return words.replaceAll(' ', '');
}

removeSpaces("lorem ipsum dolor"); // "loremipsumdolor"