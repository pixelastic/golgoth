import createTmpDirectory from 'firost/tmpDirectory.js';
import writeJson from 'firost/writeJson.js';
import write from 'firost/write.js';
import remove from 'firost/remove.js';
import run from 'firost/run.js';
import { fileURLToPath } from 'url';
import path from 'path';

describe('index', () => {
  const exportedModules = [
    'chalk',
    'dayjs',
    'dedent',
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
    await run('yarn install', { cwd: tmpDirectory });
  });
  afterAll(async () => {
    await remove(tmpDirectory);
  });

  describe('named imports', () => {
    it.each(exportedModules)('%s', async (module) => {
      await write(
        dedent`
      import { ${module} } from 'golgoth';
      console.info(!!${module});
      `,
        `${tmpDirectory}/run.js`,
      );

      const actual = await run(`node ${tmpDirectory}/run.js`);
      expect(actual).toHaveProperty('stdout', 'true');
    });
  });
  describe('default (god) import', () => {
    it.each(exportedModules)('%s', async (module) => {
      await write(
        dedent`
      import golgoth from 'golgoth';
      console.info(!!golgoth.${module});
      `,
        `${tmpDirectory}/run.js`,
      );

      const actual = await run(`node ${tmpDirectory}/run.js`);
      expect(actual).toHaveProperty('stdout', 'true');
    });
  });
});
