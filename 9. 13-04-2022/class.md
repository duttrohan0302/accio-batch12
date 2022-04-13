## Topics

### Specificity
- If there are 2 or more CSS rules that point to the same element, the selector with the highest specificity value will "win", and its style declaration will be applied to the element.
 - Inline Styles
 - ID
 - Classes, pseudo-classes and attribute-selectors => .className,:hover,[ href ]
 - Elements and pseudo-elements=> tags and :before

- To calculate specificity start from left and add 100 for every id, 10 for every class and 1 for every element..
- For inline styling you can add 1000. 
- !important is the exception, it takes priority over everything else.
- Equal specificity => Latest rule ones