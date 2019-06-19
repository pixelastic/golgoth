import _ from 'lodash';

const module = {
  /**
   * Import the list of depencies as an object, ready to be exported
   * @param {Array} deps List of dependencies to load
   * @returns {object} Object containing all named dependencies
   **/
  import(deps) {
    const result = {};
    _.each(deps, dep => {
      const dependencyName = _.camelCase(dep);
      result[dependencyName] = this.loadDependency(dep);
    });
    return result;
  },
  /**
   * Load a given dependency, no matter if it's using .default or not
   * @param {string} dep Dependency path
   * @returns {object} Loaded dependency
   **/
  loadDependency(dep) {
    const value = this.__require(dep);
    return _.get(value, 'default', value);
  },
  /**
   * Wrapper of default require method, for easier mocking in tests
   * @param {string} dep Dependency to load
   * @returns {object} Loaded dependency
   **/
  __require(dep) {
    return require(dep);
  },
};

export default module;
