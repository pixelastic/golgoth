import lodash from 'lodash';
import { flatten } from 'flat';

const originalFlatten = lodash.flatten;

lodash.mixin({
  /**
   * Flatten an array or an object
   * Works like the default lodash methods on arrays
   * Will flatten objects to one level deep with dot paths for keys
   * @param {Array|object} input Array or Object to flatten
   * @returns {Array|object} Flatten array or object
   **/
  flatten(input) {
    // Use default lodash method if not an object
    if (!lodash.isPlainObject(input)) {
      return originalFlatten(input);
    }

    return flatten(input);
  },

  /**
   * Unflatten an object, expanding all keys to deep objects
   * @param {object} input Object to unflatten
   * @returns {object} Unflatten object
   **/
  unflatten(input) {
    return lodash.transform(
      input,
      (result, value, key) => {
        lodash.set(result, key, value);
      },
      {},
    );
  },

  /**
   * Outputs the chained value for debugging.
   * @param {object} input Object to debug
   * @returns {object} Initial object
   **/
  debug(input) {
    console.info(input);
    return input;
  },

  /**
   * Replaces all occurrences of a pattern in a string with a replacement value.
   * @param {string} string - The input string to search in
   * @param {string|RegExp} pattern - The pattern to search for
   * @param {string} replacement - The string to replace matches with
   * @returns {string} A new string with all occurrences of the pattern replaced
   */
  replaceAll(string, pattern, replacement) {
    return string.replaceAll(pattern, replacement);
  },
});

export default lodash;
