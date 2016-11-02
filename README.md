# SuprematismTooltip

_I was partly through making this directive when it because clear something more than a tooltip was desired. While this note exists, consider this directive as still a work in progress (eg, no tests, lacking documentation, etc)_

An Angular 2 tooltip directive.

Currently it is built atop [concise.css](http://concisecss.com/) (and so it is a peer dependency of this npm module). This directive intentionally abstracts away concise.css specific implementation details.


### Attibute Directives
- [`supreTooltipText`](#supreTooltipText)
- [`supreTooltipPosition`](#supreTooltipPosition)


#### <a id="supreTooltipText"></a> `supreTooltipText`
An attribute directive for the tooltip text, accepting a string.


#### <a id="supreTooltipPosition"></a> `supreTooltipPosition`
An attribute directive for the tooltip position, accepting 'top'|'right'|'bottom'|'left' which defaults to 'top'.


### Example
```html
<span
  [supreTooltipText]="'The Browns have a history of losing to the bye week'"
  [supreTooltipPosition]="'right'">
    The Browns are likely to go 0-17 this year.
</span>
```
Run the example locally with
```bash
npm run example
```

### Installation
```bash
npm i -S CINBCUniversal/suprematism-tooltip
```
