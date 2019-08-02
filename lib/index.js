import packageJson from '../package.json';
import loader from './loader';
import _ from 'lodash';

const packageDeps = loader.import(_.keys(_.get(packageJson, 'dependencies')));
const lodash = loader.loadDependency('./lodash.js');
const module = {
  ...packageDeps,
  spinner: loader.loadDependency('./spinner.js'),
  chalk: loader.loadDependency('./chalk.js'),
  lodash,
  _: lodash,
};

export default module;
