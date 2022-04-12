## Topics

### Flexbox
- Before flexbox, we had 4 layout modes
 1. Block => Sections in a webpage
 2. Inline => Text
 3. Table => 2D table data
 4. Positioned => for explicit positioning of an element

Flex box layout module => makes it easier to design flexible and responsive layouts without using float or positioning

- Whenever you need flexible layout(rows or columns), give property display:flex to the parent container
- flex-direction: row(default) | column | row-reverse | column-reverse
- flex-wrap: nowrap(default) | wrap | wrap-reverse
- flex-flow: row wrap-reverse (combine the above two properties)
- justify-content: flex-start | center | flex-end | space-around | space-between
- align-items:stretch | flex-start | center | flex-end | baseline
- align-content:stretch | flex-start | flex-end | space-around | space-between | center
- Perfect centering => use justify-content:center and align-items:center in the parent component