const ping = () => {
  console.log('ping');
  //   setTimeout(ping(), 500); --> Ojo con esto "Maximum call stack size exceeded"
  setTimeout(ping, 500);
};

ping();
