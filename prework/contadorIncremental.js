
const incrementalCounter = (initialValue = 0) => {
  let value = initialValue;
  const increase = () => value += 1;
  const print = () => console.log(value);

  const doWork = () => {
    increase();
    print();
  }

  setInterval(doWork, 1000);
}

incrementalCounter();