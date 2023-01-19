/**
 * Realiza las siguientes transformaciones.
 */

function getAcronyms(list) {
  return list.map(sentence => sentence.split(" ").map(word => word.charAt(0)).join(""));
}

console.log(getAcronyms(["lorem ipsum dolor", "hello world"])); // ["lid", "hw"]




function getNames(list) {
  return list.map(obj => obj.name);
}

console.log(getNames([{ name: "Alberto" }, { name: "Fran" }])); // ["Alberto", "Fran"]
