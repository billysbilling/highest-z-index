highest-z-index
===============

Returns the highest `z-index` found amongst a set of elements.

```javascript
var zIndex = highestZIndex(); //Defaults to look at `body > *`, i.e. all direct children of `body`.
var zIndex = highestZIndex('#my-component > div'); //Looks at specific elements
```