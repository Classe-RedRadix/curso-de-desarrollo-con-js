function createIndexLoggers() {
  let list = [];

  for (let i = 0; i < 10; i++) {
    // ^ hay que cambiar el var por un let
    list.push(function () {
      console.log(i);
    });
  }

  return list;
}
const loggers = createIndexLoggers();
const firstLogger = loggers[0];
const secondLogger = loggers[1];

firstLogger(); // 0
secondLogger(); // 1
