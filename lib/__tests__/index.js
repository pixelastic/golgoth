import module from '../index';
import loader from '../loader';

describe('index', () => {
  it('should load dependencies from package.json', () => {
    expect(module).toHaveProperty('chalk');
    expect(module).toHaveProperty('dayjs');
    expect(module).toHaveProperty('firost');
    expect(module).toHaveProperty('got');
    expect(module).toHaveProperty('lodash');
    expect(module).toHaveProperty('pAll');
    expect(module).toHaveProperty('pMap');
    expect(module).toHaveProperty('pMapSeries');
    expect(module).toHaveProperty('pify');
    expect(module).toHaveProperty('queryString');
  });
  it('should add custom spinner dependency', () => {
    expect(module).toHaveProperty('spinner');
  });
  it('should overwrite chalk with custom one', () => {
    const expected = loader.loadDependency('./chalk.js');
    expect(module.chalk).toEqual(expected);
  });
  it('should allow access to lodash through _', () => {
    expect(module._).toEqual(module.lodash);
  });
});
