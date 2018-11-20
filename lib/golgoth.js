import packageJson from '../package.json';
import _ from 'lodash';

const module = _.chain(packageJson)
  .get('dependencies')
  // Load everything in dependencies
  .transform((result, version, name) => {
    // eslint-disable-next-line no-param-reassign
    result[_.camelCase(name)] = require(name);
  })
  // Add custom ones
  .thru(result => ({
    ...result,
    chalk: require('./chalk'),
    _: result.lodash,
  }))
  .value();

export default module;
