
function asynk(gene) {
  return function() {
    const generator = gene.apply(this, arguments);

    function handle(value) {
      const result = generator.next(value);
      if (result.done) {
        return result.value;
      }
      return result.value.then(handle, (error) => generator.throw(error));
    }
    return handle();
  };
}

// wait for promise
const delay = (time_ms) => new Promise((resolve) => setTimeout(resolve, time_ms));

// the generator to be tested
const myGenerator = function* (waitPerCall) {
  let timePassed = 0;
  let appliedDelay = 1;
  if(waitPerCall)
  {
    appliedDelay = waitPerCall;
  }
  else
  {
    console.log("No waitPerCall specified, default 1s...");
  }

  // only doing a couple of calls just for testing
  console.log("myGenerator started");
  yield delay(appliedDelay*1000);
  timePassed +=appliedDelay;
  console.log(timePassed+" second has passed");
  yield delay(appliedDelay*1000);
  timePassed +=appliedDelay;
  console.log(timePassed+" seconds have passed");
  return "Reached Done";
};


// example of use
const sample = asynk(myGenerator);

sample(3).then((result) => {
  console.log(result);  // result shoudl equal "Reached Done" return
});

// sample().then((result) => {
//   console.log(result);  // result shoudl equal "Reached Done" return
// });