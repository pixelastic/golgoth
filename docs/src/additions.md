---
title: Additions
---

Some additional methods or plugins are included by default.

## `_.flatten()` and `_.unflatten()` for objects

`_.flatten` flattens any nested object. `_.unflatten` reverts it.

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

## Default modules for `dayjs`

`dayjs` is loaded with the following plugins:

- [utc][1]
- [isSameOrBefore][2]
- [isSameOrAfter][3]

[1]: https://day.js.org/docs/en/plugin/utc#docsNav
[2]: https://day.js.org/docs/en/plugin/is-same-or-before#docsNav
[3]: https://day.js.org/docs/en/plugin/is-same-or-after#docsNav
