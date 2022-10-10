// Crea aquí tu función cut

function cut(list, start, end) {
  const slicedArray = list.map((item, index) => {
    const isInStartRange = index >= start;
    const rangeEnd = end !== undefined ? end : list.length - 1;
    const isInEndRange = index <= rangeEnd;

    if (isInStartRange && isInEndRange) return item;
    // return null;
  });
  console.log(slicedArray.filter(item => item));
  return slicedArray.filter(item => item);
}

cut(['a', 'b', 'c', 'd'], 1, 2); // ["b", "c"]
cut(['a', 'b', 'c', 'd'], 1); // ["b", "c", "d"]
