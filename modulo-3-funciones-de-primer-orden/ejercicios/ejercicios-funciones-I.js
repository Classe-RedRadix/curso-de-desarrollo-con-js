function repeat(fn, times) {
  for (let index = 0; index < times; index++) {
    fn();
  }
}

// SPAM! SPAM! SPAM!
repeat(() => console.log("SPAM!"), 3);
