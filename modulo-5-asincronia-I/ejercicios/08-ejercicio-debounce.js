/**
 * Implementa la función debounce
 */

function debounce(func, milliseconds) {
  // ?
}

const spam = () => console.log("SPAM!");

const debouncedSpam = debounce(spam, 500);

debouncedSpam(); // (Sin log)
debouncedSpam(); // (Sin log)
debouncedSpam(); // (Sin log)
debouncedSpam(); // (Sin log)
debouncedSpam(); // A los 500ms: SPAM!
