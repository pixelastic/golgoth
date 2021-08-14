---
title: Lodash add-ons
---

The default Lodash comes with additional methods, described below:

## `flatten()` and `unflatten()`

The default [flatten][1] method of Lodash
only flattens Arrays. Golgoth comes with a modified `flatten` method that also
flattens Objects, and its reverse `unflatten`.

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

## `debug`

This new method is a syntactic sugar over `.thru(console.info)`, so you can
quickly see what a value is when chaining it.

```javascript
_.chain(data).filter({ isPremium: true }).sort().debug().value();
```

[1]: https://lodash.com/docs/4.17.15#flatten
