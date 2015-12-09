var foo = 42;
var baz = 42;

console.log(baz === foo); // --> true

//immutable vs. mutable

var myObject = {};
var myOtherObject = {};

console.log(myObject === myOtherObject); // --> false



var anotherObject = myObject;

console.log(myObject === anotherObject); // --> true



myObject.x = 5;

console.log(myOtherObject.x); // --> undefined
console.log(anotherObject.x); // --> 5
