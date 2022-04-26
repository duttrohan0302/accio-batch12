## JavaScript Variables

### var, let and const
- var declarations are globally scoped or function scoped while let and const are block scoped.
- var variables can be updated and re-declared within it's scope.
- let variables can be updated but not re-declared
- const variables can never be updated nor re-declared.
- They are all hoisted to the top of their scope. But while var variables are intialized(gives undefined on printing), let and const variables are not intialized(gives reference error).
- While var and let can be declared without being initialized, const must be initalized during declaration.