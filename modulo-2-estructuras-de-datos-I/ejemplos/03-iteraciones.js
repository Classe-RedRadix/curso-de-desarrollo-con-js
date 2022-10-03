const array = [1, 2, 3, 4, 5];

// Accediendo a los valores

for (const item of array) {
  console.log("for..of", item);
}

array.forEach((item) => console.log("forEach", item));

// Accediendo a sus indices

for (let index = 0; index < array.length; index++) {
  console.log("for", index, "=>", array[index]);
}

array.forEach((item, index) => console.log("forEach", index, "=>", item));
