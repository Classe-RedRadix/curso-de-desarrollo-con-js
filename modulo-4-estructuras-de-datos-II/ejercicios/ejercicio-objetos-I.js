const obj = { a: 1, b: 2, c: 3 };

const mapKeys = (obj, mapper) => {
  const modifiedObject = {};

  Object.keys(obj).forEach((key) => (modifiedObject[mapper(key)] = obj[key]));

  return modifiedObject;
};

const keysMapped = (obj, mapper) => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[mapper(key)] = obj[key];
    return acc;
  }, {});
};

const result = mapKeys(obj, (key) => key.toUpperCase());
const resultWithReduce = keysMapped(obj, (key) => key.toUpperCase());
console.log(result);
console.log(resultWithReduce);
