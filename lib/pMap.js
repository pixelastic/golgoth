import pMap from 'p-map';
import os from 'os';

/**
 * Wrapper around pMap to always use the number of cores as concurrent runners
 * @param {Array} input Array of elements to map
 * @param {Function} mapper Method to run on each item
 * @param {object} userOptions Option object, as per p-map
 * @returns {Promise} Array of fulfilled values
 **/
export default async function(input, mapper, userOptions = {}) {
  const options = {
    concurrency: os.cpus().length,
    ...userOptions,
  };
  return await pMap(input, mapper, options);
}
