import packageJson from '../package.json';
import _ from 'lodash';

const module = _.chain(packageJson)
  .get('dependencies')
  // Load everything in dependencies
  .transform((result, version, name) => {
    const dependencyName = _.camelCase(name);
    const required = require(name);
    const dependencyValue = _.get(required, 'default', required);
    // eslint-disable-next-line no-param-reassign
    result[dependencyName] = dependencyValue;
  })
  // Add custom ones
  .thru(result => ({
    ...result,
    chalk: require('./chalk').default,
    spinner: require('./spinner').default,
    _: result.lodash,
  }))
  .value();

export default module;
