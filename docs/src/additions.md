---
title: Additions
---

<div class="lead">
  Some of the libraries packaged in golgoth offer additional configuration
  options or optional plugins. This page documents what is included by default.
</div>

## Flattening objects in Lodash

The default [flatten](https://lodash.com/docs/4.17.15#flatten) method of Lodash
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

## Easier date comparison with Day.js

All dates handled by [Day.js](https://day.js.org/) are not in UTC by default
which resulted in many lost hours wasted debugging local timezone issues. Since
then, Golgoth includes the [utc][1] plugin so you can call `dayjs().utc()` instead of
`dayjs()` to force UTC. 

It also includes the [isSameOrBefore][2] and [isSameOrAfter][3] for quick date
comparison.

[1]: https://day.js.org/docs/en/plugin/utc#docsNav
[2]: https://day.js.org/docs/en/plugin/is-same-or-before#docsNav
[3]: https://day.js.org/docs/en/plugin/is-same-or-after#docsNav
