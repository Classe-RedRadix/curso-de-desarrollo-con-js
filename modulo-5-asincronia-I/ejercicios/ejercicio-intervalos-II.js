function hacendadoSetInterval(interval = 500) {
  console.log("ping");
  setTimeout(() => hacendadoSetInterval(), interval);
}

hacendadoSetInterval();
