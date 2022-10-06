const cut = (array, firstIndex, lastIndex) => {
  const list = [];
  const finalIndex = lastIndex ?? array.length - 1;

  for (let i = firstIndex; i <= finalIndex; i++) {
    list.push(array[i]);
  }

  return list;
};

// ["b", "c"]
console.log(cut(["a", "b", "c", "d"], 1, 2));

// ["b", "c", "d"]
console.log(cut(["a", "b", "c", "d"], 1));

const cut2 = (array, firstIndex, lastIndex) => {
  const finalIndex = lastIndex ?? array.length - 1;

  const list = array.reduce((acc, value, index) => {
    if (index >= firstIndex && index <= finalIndex) {
      return [...acc, value];
    } else {
      return acc;
    }
  }, []);

  return list;
};

// ["b", "c"]
console.log(cut2(["a", "b", "c", "d"], 1, 2));

// ["b", "c", "d"]
console.log(cut2(["a", "b", "c", "d"], 1));
