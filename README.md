# Ω Golgoth

Meta-package including all the libs I always need (lodash, pify, etc)

When building project in JavaScript, I often end up installing the same
dependencies over and over again. This meta-package is a prototyping shortcut
for me, to install them all in one go.

## Libraries included

| Name                                           | Description                                                                       |
| ---------------------------------------------- | --------------------------------------------------------------------------------- |
| [`chalk`][1]                                   | Pretty colors in terminal output. Default colors updated to match my colorscheme. |
| [`dayjs`][2]                                   | Easy date parsing and comparing                                                   |
| [`got`][4]                                     | HTTP requests made easy                                                           |
| [`lodash`][5]                                  | JavaScript utility belt                                                           |
| [`pAll`][6], [`pMap`][7] and [`pMapSeries`][8] | Iterate over `async` methods                                                      |
| [`pify`][9]                                    | Convert those pesky callbacks into Promises                                       |
| [`query-string`][10]                           | Parse query strings                                                               |
| [`time-span`][3]                               | Simplified timers                                                                 |

## Usage

Use the flavor your prefer:

```javascript
// Load everything and then use what you need
import golgoth from 'golgoth';
golgoth.pify();

// import only what you need
import { pAll, pMap } from 'golgoth';
```

## Additions

## `spinner(max)`

Creates a spinner for displaying progress of a task. Uses `ora` internally.

```js
const items = ['foo', 'bar', 'baz'];
const spinner = golgoth.spinner(42);
_.each(items, item => {
  spinner.tick(item);
});
spinner.succeed('All items scanned');
spinner.fail('Error while scanning items');
```

## Notes

`lodash` is available either as `lodash` or `_`.

[1]: https://yarnpkg.com/en/package/chalk
[2]: https://yarnpkg.com/en/package/dayjs
[3]: https://yarnpkg.com/en/package/time-span
[4]: https://yarnpkg.com/en/package/got
[5]: https://yarnpkg.com/en/package/lodash
[6]: https://yarnpkg.com/en/package/p-all
[7]: https://yarnpkg.com/en/package/p-map
[8]: https://yarnpkg.com/en/package/p-map-series
[9]: https://yarnpkg.com/en/package/pify
[10]: https://yarnpkg.com/en/package/query-string
