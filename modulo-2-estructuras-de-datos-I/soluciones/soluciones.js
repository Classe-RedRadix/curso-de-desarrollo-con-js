// Ejercicio listas

function printEnds(list) {
  if (!list.length) return;
  print.log(list[0]);
  if (list.length > 1) print.log(list[list.length - 1]);
}

printEnds([]);
printEnds(["a1"]);
printEnds(["b1", "b2"]);
printEnds(["c1", "c2", "c3"]);

// Ejercicio listas II
function cut(list, a, b) {
  const result = [];
  for (let i = a; i <= (b || list.length - 1); i++) {
    result.push(list[i]);
  }
  return result;
}

print.log(cut(["a", "b", "c"], 0, 2));
print.log(cut(["a", "b", "c"], 1, 1));
print.log(cut(["a", "b", "c"], 1));

// Ejercicio listas III
function flatten(list) {
  let result = [];
  for (let sublist of list) {
    result = result.concat(...sublist);
  }
  return result;
}

print.log(
  flatten([
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
    ["C1", "C2", "C3"],
  ])
);

// Ejercicio listas IV
function flattenDeep(node) {
  if (typeof node === "number") return node;
  if (typeof node === "object") {
    let result = [];
    for (let child of node) {
      result = result.concat(flattenDeep(child));
    }
    return result;
  }
}

print.log(flattenDeep([1, [2, 3], [[4, 5], [6]], [[[7]]]]));

// Ejercicio recursividad
function sumDeep(node) {
  if (typeof node === "number") return node;
  if (typeof node === "object") {
    let result = 0;
    for (let child of node) {
      result += sumDeep(child);
    }
    return result;
  }
}

print.log(sumDeep([1, [2, 3], [[4, 5]]]));

// Ejercicio destructuring
// 2
// [2]
// []
// [3]

// Ejercicio map I
print.log([8, 12, 20].map((x) => x / 2));
print.log([1, 7, 50].map((x) => x.toString()));
print.log([-2, 5, 15, -7, -8].map((x) => (x > 0 ? "+" : "-")));

// Ejercicio map II
print.log(
  ["lorem ipsum dolor", "hello world"].map((sentence) =>
    sentence
      .split(" ")
      .map((word) => word[0])
      .join("")
  )
);

print.log([{ name: "Alberto" }, { name: "Fran" }].map((obj) => obj.name));

// Ejercicio map III
const mapInput = [[1, 2], [34, 20, 5], [11], [2, 4]];

print.log(
  mapInput.map((list) => {
    let result = 0;
    for (let item of list) {
      result += item;
    }
    return result;
  })
);

// Ejercicio filter
const filterInput = [
  { name: "lorem", important: false },
  { name: "ipsum", important: true },
];

print.log(filterInput.filter((item) => item.important));

// Ejercicio reduce I
print.log([1, 2, 3].reduce((acc, x) => acc + x, 0));
print.log(["a", "b", "c"].reduce((acc, x) => acc + x, ""));

// Ejercicio reduce II
print.log([1, -2, 3].reduce((acc, x) => (x > 0 ? acc + x : acc), 0));
print.log([1, -2, 3].reduce((acc, x) => (x > acc ? x : acc), -Infinity));

// Ejercicio reduce III
const reduceInput = [[1, 2], [34, 20, 5], [11], [2, 4]];

print.log(
  reduceInput.reduce((acc, x) => [...acc, x.reduce((acc, x) => acc + x, 0)], [])
);

// Ejercicio sets I
function difference(a, b) {
  const result = [];
  for (let item of a) {
    if (!b.includes(item)) result.push(item);
  }
  return result;
}

print.log(difference([1, 2, 3], [3, 4, 5]));

// Ejercicio sets II
function intersection(a, b) {
  const result = [];
  for (let item of a) {
    if (b.includes(item)) result.push(item);
  }
  return result;
}

print.log(intersection([1, 2, 3], [3, 4, 5]));
