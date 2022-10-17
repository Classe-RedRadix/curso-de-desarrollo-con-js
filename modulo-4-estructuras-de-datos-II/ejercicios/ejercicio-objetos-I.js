const obj = { a: 1, b: 2, c: 3 };

const mapKeys = (object, morph) => {
    return Object.fromEntries(
        Object.entries(object)
        .map(([ key, value ]) => [ morph(key), value ])
      );

  return Object.keys(object).reduce(reducer, {});
}

const result = mapKeys(obj, (key) => key.toUpperCase());

console.log(result); // { A: 1, B: 2, C: 3}
