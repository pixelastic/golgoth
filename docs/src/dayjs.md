---
title: Day.js add-ons
---

Day.js comes packaged with some plugins by default, described below:

## `utc`

By default, dates handled by [Day.js](https://day.js.org/) are [not in UTC][1].
The `utc` plugin is included, so you can call `dayjs().utc()` instead of
`dayjs()`.

## `isSameOrBefore` and `isSameOrAfter`

It also includes the [isSameOrBefore][2] and [isSameOrAfter][3] for quick date
comparison.

[1]: https://day.js.org/docs/en/plugin/utc#docsNav
[2]: https://day.js.org/docs/en/plugin/is-same-or-before#docsNav
[3]: https://day.js.org/docs/en/plugin/is-same-or-after#docsNav
