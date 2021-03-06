//Objects can be created in 3 ways

// #1: object literals
var myObject = {};
var point = {
  x: 2,
  y: 4,
  move: function() {
    this.x += 1;
    this.y += 1;
  }
};

// #2: using the 'new' keyword followed by a function invocation

function Circle(radius) {
  this.radius = radius;
  this.area = radius * radius * Math.pi;
}

var myCircle = new Circle(5);
// myCircle.radius --> 5
// myCircle.area --> 25pi


// #3: Object.create()
// this creates a new object that inherits from the object you pass in as a parameter

var myNewObject = Object.create(point);

// myNewObject.x --> 0
// myNewObject.hasOwnProperty('x') -->  false
