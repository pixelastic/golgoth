import packageJson from '../package.json';
import loader from './loader';
// import _ from 'lodash';

const _ = loader.loadDependency('./lodash.js');
const packageDeps = loader.import(_.keys(_.get(packageJson, 'dependencies')));
const module = {
  ...packageDeps,
  spinner: loader.loadDependency('./spinner.js'),
  chalk: loader.loadDependency('./chalk.js'),
  _,
  lodash: _,
};

export default module;
