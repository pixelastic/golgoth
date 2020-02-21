const lodash = require('lodash');
const flat = require('flat');
const originalFlatten = lodash.flatten;

/**
 * Flatten an array or an object
 * Works like the default lodash methods on arrays
 * Will flatten objects to one level deep with dot paths for keys
 * @param {Array|object} input Array or Object to flatten
 * @returns {Array|object} Flatten array or object
 **/
function flatten(input) {
  // Use default lodash method if not an object
  if (!lodash.isPlainObject(input)) {
    return originalFlatten(input);
  }

  return flat(input);
}

/**
 * Unflatten an object, expanding all keys to deep objects
 * @param {object} input Object to unflatten
 * @returns {object} Unflatten object
 **/
function unflatten(input) {
  return lodash.transform(
    input,
    (result, value, key) => {
      lodash.set(result, key, value);
    },
    {}
  );
}

module.exports = {
  ...lodash,
  flatten,
  unflatten,
};
