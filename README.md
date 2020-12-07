<!--
  This page was automatically generated.
  DO NOT EDIT IT MANUALLY.
  Instead, update .github/README.template.md
  and run aberlaas readme
-->

# golgoth

<div class="lead">
  When building project in JavaScript, I often end up installing the same
  dependencies over and over again. Golgoth is a meta-package that allow me to
  install them all in one go.
</div>

## Libraries included

| Library name       | Required  as          | Description                                                                            |
| ------------------ | --------------------- | -------------------------------------------------------------------------------------- |
| [chalk][1]         | `golgoth/chalk`       | Terminal string styling done right                                                     |
| [dayjs][2]         | `golgoth/dayjs`       | 2KB immutable date time library alternative to Moment.js with the same modern API      |
| [dedent][12]       | `golgoth/dedent`      | An ES6 string tag that strips indentation from multi-line strings                      |
| [got][4]           | `golgoth/got`         | Human-friendly and powerful HTTP request library for Node.js                           |
| [Lodash][5]        | `golgoth/_`           | A modern JavaScript utility library delivering modularity, performance & extras.       |
| [p-all][6]         | `golgoth/pAll`        | Run promise-returning & async functions concurrently with optional limited concurrency |
| [p-map-series][8]  | `golgoth/pMapSeries`  | Map over promises serially                                                             |
| [p-map][7]         | `golgoth/pMap`        | Map over promises concurrently                                                         |
| [p-props][11]      | `golgoth/pProps`      | Like Promise.all() but for Map and Object                                              |
| [pify][9]          | `golgoth/pify`        | Promisify a callback-style function                                                    |
| [query-string][10] | `golgoth/queryString` | Parse and stringify URL query strings                                                  |
| [time-span][3]     | `golgoth/timeSpan`    | Simplified high resolution timing                                                      |

## Usage

```javascript
const pMap = require('golgoth/pMap');
const _ = require('golgoth/lodash');
```

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
[12]: https://github.com/dmnd/dedent

## Documentation

The complete documentation can be found on https://projects.pixelastic.com/golgoth/