const obj = { a: 1, b: 2, c: 3 };

const result = obj => {
  const result = {};

  const keys = Object.keys(obj);
  const values = Object.values(obj);

  for (let i = 0; i < keys.length; i++) {
    currentKey = keys[i].toUpperCase();
    currentValue = values[i];

    result[currentKey] = currentValue;
  }

  return result;
};

console.log(result(obj)); // { A: 1, B: 2, C: 3 }
