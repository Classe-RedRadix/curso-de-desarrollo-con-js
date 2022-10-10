function createIndexLoggers() {
  let list = []

  for (var i = 0; i < 10; i++) {
    list.push(function () {
      console.log(i)
    })
  }

  return list
}
const loggers = createIndexLoggers()
const firstLogger = loggers[0]
const secondLogger = loggers[1]

firstLogger() // ?
secondLogger() // ?
