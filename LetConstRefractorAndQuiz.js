// ES5 Global Constants refractoring
var PI = 3.14;
PI = 42;

//change this by using const ES2015 version
const PIE = 3.14;
PIE = 3.14; //this will not work on running it

//Quiz below this point
/*
What is the difference between var and let?
    Var declares and is globaly accessable. Let is only available within a set scope. As well as Var being able to be redeclared and re-assigned. While let can only be re-assigned. (they can both be mutated I guess)
What is the difference between var and const?
Var declares and is globaly accessable. const is only available within a set scope. As well as Var being able to be redeclared and re-assigned. While const can only be mutated. 
What is the difference between let and const?
    const can only be mutated while let can be mutated and re-assigned.
What is hoisting?
    Is when var assignment is read before the rest of the document but not assigned the equivalent value associated with it. This is dumb.
*/
