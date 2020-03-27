# Ω Golgoth

Meta-package including all the libs I always need (lodash, pify, etc)

When building project in JavaScript, I often end up installing the same
dependencies over and over again. This meta-package is a prototyping shortcut
for me, to install them all in one go.

## Libraries included

| Name                                                           | Description                                                                       |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`chalk`][1]                                                   | Pretty colors in terminal output. Default colors updated to match my colorscheme. |
| [`dayjs`][2]                                                   | Easy date parsing and comparing                                                   |
| [`got`][4]                                                     | HTTP requests made easy                                                           |
| [`lodash`][5]                                                  | JavaScript utility belt                                                           |
| [`pAll`][6], [`pMap`][7], [`pProps`][11] and [`pMapSeries`][8] | Iterate over `async` methods                                                      |
| [`pify`][9]                                                    | Convert those pesky callbacks into Promises                                       |
| [`query-string`][10]                                           | Parse query strings                                                               |
| [`time-span`][3]                                               | Simplified timers                                                                 |

## Usage

Use the flavor your prefer:

```javascript
// Load everything and then use what you need
const golgoth = require('golgoth');
golgoth.pify();

// import only what you need
const pAll = require('golgoth/lib/pAll');
const _ = require('golgoth/lib/lodash');
```

## Additions

## `_.flatten()` and `_.unflatten()` for objects

Takes any nested object and flatten its keys, or revert it

```js
const data = {
  foo: {
    bar: ['baz', 'quxx'],
  },
};
const flatData = _.flatten(data);
console.info(flatData);
// {
//   'foo.bar.0': 'baz',
//   'foo.bar.1': 'quxx'
// }
console.info(_.unflatten(flatData));
// {
//  foo: {
//    bar: ['baz', 'quxx']
//  }
// }
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
[11]: https://github.com/sindresorhus/p-props
