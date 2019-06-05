import packageJson from '../package.json';
import loader from './loader';
import _ from 'lodash';

const packageDeps = loader.import(_.keys(_.get(packageJson, 'dependencies')));
const module = {
  ...packageDeps,
  spinner: loader.loadDependency('./spinner.js'),
  chalk: loader.loadDependency('./chalk.js'),
  _: packageDeps.lodash,
};

export default module;
