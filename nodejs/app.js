// var a = 1;
// var b = 2;
// var c = a + b;

// console.log(c);

// ===========================================================

// // function statememt
// function greet() {
//     console.log("Hello, This is Tanuj!");
// }

// greet();

// // functions are first class
// function logGreeting(fn) {
//     fn();
// }

// logGreeting(greet);

// // function expression
// var greetMe = function() {
//     console.log("This is me again!");
// }
// greetMe();

// // it's first class
// logGreeting(greetMe);

// // use a function expression on the fly
// logGreeting(function() {
//     console.log("Hello, is this me really again?");
// });

// ====================================================================

// // Modules
// var greet = require("./greet");
// greet();

// ====================================================================
// var person = {
//     fn: "Tanuj",
//     ln: "Gupta",
//     greet: function() {
//         console.log("Hello, " + this.fn
//          + " " + this.ln);
//     }
// };

// person.greet();

// console.log(person['fn']);

// ====================================================================
// function Person(fn, ln) {
//     this.fn = fn;
//     this.ln = ln;
// }

// Person.prototype.greet = function() {
//     console.log("Hello " + this.fn + " " + this.ln);
// }
// var tanuj = new Person("Tanuj", "Gupta");
// tanuj.greet();

// console.log(tanuj.__proto__);

// ====================================================================
