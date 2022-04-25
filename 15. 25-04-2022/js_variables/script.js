var x=5;
// oldest one - 1995 to 2015
// if you want your code to run in older browsers, you must use var



// let and const were added to js in 2015


let y=6;

const z = 7;
const a = y;

// General rule - always declare variables with const.
// BUT, if you think, the variable value can change, use let.

const price1 = 5;
const price2 = 6;
const price3 = 7;

let total = price1+price2;
// let total = price1+price2+price3;

total2 = price1+price2+100;
// declaring a variable without using let, var and const


// Scope of var variable
var greeter = "say hello"

greeter = "say hello thrice"
console.log(greeter)
function newFunction(){
    var hello="hey there";
    var greeter = "say hello twice"
    greeter = "say hello inside"
    console.log(greeter)

}
newFunction()
console.log(greeter)

let weirdVariable = 5;

console.log(sayHello)

var sayHello = "hey there"

/*
var sayHello;
console.log(sayHello);
sayHello = "hey there"
*/

// problem with var
var greeter = "hey hello"

var times = 4;

if(times>3){
    var greeter = "say hiya instead"
    var hello = "hello"
}
console.log(hello) // gives the correct value

console.log(greeter)
console.log("-------------------------------------")
let greeting = "say Hi";

let mul = 5;

if(mul>3){
    let greeting = "hey there"
    console.log(greeting)
    let hello = "hello"
}
console.log(greeting)
// console.log(hello)
