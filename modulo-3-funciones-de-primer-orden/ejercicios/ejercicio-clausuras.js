const add = (num1) => {
  return (num2) => {
    return num1 + num2;
  };
};

const add2 = add(5);
console.log(add2(2));
