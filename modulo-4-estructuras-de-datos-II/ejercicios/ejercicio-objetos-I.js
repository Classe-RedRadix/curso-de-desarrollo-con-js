const obj = { a: 1, b: 2, c: 3 };

const mapKeys = (obj) => {
  const modifiedObject = {};

  Object.keys(obj).forEach((key) => {
    return (modifiedObject[key.toUpperCase()] = obj[key]);
  });

  return modifiedObject;
};

const keysMapped = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key.toUpperCase()] = obj[key];
    return acc;
  }, {});
};

const result = mapKeys(obj);
const resultWithReduce = keysMapped(obj);
console.log(result);
console.log(resultWithReduce);
