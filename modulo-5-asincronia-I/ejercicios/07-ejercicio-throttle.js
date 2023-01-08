/**
 * Implementa la función throttle.
 */

function throttle(func, milliseconds) {
  // ?
}

const spam = () => console.log('SPAM!')

const throttledSpam = throttle(spam, 500)

throttledSpam() // SPAM!
throttledSpam() // (Sin log)
throttledSpam() // (Sin log)
throttledSpam() // (Sin log)

setTimeout(throttledSpam, 600) // SPAM!
