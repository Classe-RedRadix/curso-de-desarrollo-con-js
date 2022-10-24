const wait = time => {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
};

wait(2000).then(() => console.log('Han pasado 2 segundos'));
