# Ω Golgoth

Meta-package including all the libs I always need (lodash, pify, etc)

When building project in JavaScript, I often end up installing the same
dependencies over and over again. This meta-package is a prototyping shortcut
for me, to install them all in one go.

## Libraries included

- `chalk`: Pretty colors in terminal output
- `dayjs`: Easy date parsing and comparing
- `got`: HTTP requests made easy
- `firost`: Own filesystem helper functions
- `lodash`: JavaScript utility belt
- `pAll`, `pMap` and `pMapSeries`: Iterate over `async` methods
- `pify`: Convert those pesky callbacks into Promises
- `query-string`: Parse query strings

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
const spinner = firost.spinner(42);
_.each(items, item => {
  spinner.tick(item);
});
spinner.succeed('All items scanned');
```

## Notes

`lodash` is available either as `lodash` or `_`.
