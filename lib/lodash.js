import lodash from 'lodash';
import flat from 'flat';
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

const module = {
  ...lodash,
  flatten,
  unflatten: flat.unflatten,
};

export default module;
