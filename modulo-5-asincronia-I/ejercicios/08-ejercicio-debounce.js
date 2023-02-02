/**
 * Implementa la función debounce
 */

function debounce(func, milliseconds) {

  let timer = null
  return (...args) => {
      if (timer) {
          clearTimeout(timer)
      }
      timer = setTimeout(() => func(...args), milliseconds)
  }

}



const spam = () => console.log("SPAM!");

const debouncedSpam = debounce(spam, 500);

debouncedSpam(); // (Sin log)
debouncedSpam(); // (Sin log)
debouncedSpam(); // (Sin log)
debouncedSpam(); // (Sin log)
debouncedSpam(); // A los 500ms: SPAM!
