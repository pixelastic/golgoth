import packageJson from '../package.json';
import loader from './loader';

const _ = loader.loadDependency('./lodash.js');
const packageDeps = loader.import(_.keys(_.get(packageJson, 'dependencies')));
const module = {
  ...packageDeps,
  spinner: loader.loadDependency('./spinner.js'),
  chalk: loader.loadDependency('./chalk.js'),
  pMap: loader.loadDependency('./pMap.js'),
  _,
  lodash: _,
};

export default module;
