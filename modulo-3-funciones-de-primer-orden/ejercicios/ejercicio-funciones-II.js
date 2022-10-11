function repeat(fn, times) {
  try {
    for (let index = 0; index < times; index++) {
      fn();
    }
  } catch (error) {
    console.log("Error catcheado");
  }
}

function mayFail() {
  let isGonnaFail = Math.random() < 0.5;
  if (isGonnaFail) {
    if (index % 2 === 0) throw new Error("Forced failure!");
  }
}

// SPAM! SPAM! SPAM!
repeat(() => mayFail());
