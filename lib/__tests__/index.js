import module from '../index';
import loader from '../loader';

describe('index', () => {
  it('should load dependencies from package.json', () => {
    expect(module).toHaveProperty('chalk');
    expect(module).toHaveProperty('dayjs');
    expect(module).toHaveProperty('got');
    expect(module).toHaveProperty('lodash');
    expect(module).toHaveProperty('pAll');
    expect(module).toHaveProperty('pMap');
    expect(module).toHaveProperty('pMapSeries');
    expect(module).toHaveProperty('pify');
    expect(module).toHaveProperty('queryString');
  });
  it('should not include firost', () => {
    // As firost uses golgoth, we don't want to have golgoth also using firost
    // as it will create too many cycling dependencies we want to avoid.
    // The lesser of two evil is to remove firost from golgoth and have projects
    // load both
    expect(module).not.toHaveProperty('firost');
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
