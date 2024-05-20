// Counter variable that is increased by one

let counter = 0;

function addCounter() {
  console.log(counter++);
}

setInterval(addCounter, 1000);
