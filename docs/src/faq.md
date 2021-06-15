---
title: Frequently Asked Questions
---

<div class="lead">
  Golgoth is a weird module in that it doesn't add any additional feature except
  what's available in the modules it packages. So it's fair to wonder "what's
  the point?". This page should answer those questions.
</div>

## Won't this drastically increase my bundle size for libraries I don't need?

Yes, it will. `golgoth` is not meant to be used for browser code. It should be
used for CLI or backend code, where you don't really care about the disk
footprint.

## I could manually add the modules I want when I want them, what's the  point?

See `golgoth` as a protyping tool. Install it to bootstrap a project with every
library you will most likely need. If you feel it's too much and you're barely
using one or two libraries, remove it and replace it with the one you actually
need.
