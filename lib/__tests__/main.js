import { fileURLToPath } from 'url';
import path from 'path';
import {
  tmpDirectory as createTmpDirectory,
  remove,
  run,
  write,
  writeJson,
} from 'firost';

describe('index', () => {
  const exportedModules = [
    'chalk',
    'dayjs',
    'got',
    'lodash',
    'pAll',
    'pMapSeries',
    'pMap',
    'pProps',
    'pify',
    'queryString',
    'timeSpan',
    '_',
  ];
  const tmpDirectory = createTmpDirectory('golgoth');
  const dirname = fileURLToPath(new URL('.', import.meta.url));
  const libPath = path.resolve(dirname, '..');

  // We setup a default project, that includes golgoth, to test that we can
  // correctly load it
  beforeAll(async () => {
    // Make it a real ESM project, with a name and a dependency
    await writeJson(
      {
        name: 'golgoth-test',
        type: 'module',
        packageManager: 'yarn@4.0.2',
        dependencies: {
          golgoth: `link:${libPath}`,
        },
      },
      `${tmpDirectory}/package.json`,
    );
    // Install deps quickly
    await write('nodeLinker: node-modules', `${tmpDirectory}/.yarnrc.yml`);
    // Note: --no-immutable is required for CI builds. By default, if CI=1, yarn
    // will use the --immutable flag, which should prevent yarn from updating
    // (or creating) the lockfile. Here, we don't care, we want yarn to install
    // deps so we need to overwrite it.
    await run('yarn install --no-immutable', {
      cwd: tmpDirectory,
      stdout: false,
    });
  });
  afterAll(async () => {
    await remove(tmpDirectory);
  });

  // We'll create a bunch of small .js scripts that import golgoth submodules in
  // various ways, run them and console.info if they exist or not.
  describe('named imports', () => {
    it.each(exportedModules)('%s', async (module) => {
      // Create the script
      await write(
        dedent`
      import { ${module} } from 'golgoth';
      console.info(!!${module});
      `,
        `${tmpDirectory}/run.js`,
      );

      // Run it
      const actual = await run(`FORCE_COLOR=0 node ${tmpDirectory}/run.js`, {
        shell: true,
        stdout: false,
      });
      expect(actual).toHaveProperty('stdout', 'true');
    });
  });
  describe('default (god) import', () => {
    it.each(exportedModules)('%s', async (module) => {
      // Create the script
      await write(
        dedent`
      import golgoth from 'golgoth';
      console.info(!!golgoth.${module});
      `,
        `${tmpDirectory}/run.js`,
      );

      // Run it
      const actual = await run(`FORCE_COLOR=0 node ${tmpDirectory}/run.js`, {
        shell: true,
        stdout: false,
      });
      expect(actual).toHaveProperty('stdout', 'true');
    });
  });
});
