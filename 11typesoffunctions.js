// hoisting a() and b()
a();
b(); // throws type error: b is not a function

// function statement aka function declaration
function a() {
    console.log("a() called");
}

// function expression
var b = function () {
    console.log("b() called");
}


// anonymous function
/**
 * following statement throws syntax error
 * because function statements need to have a
 * name
 */
// function () {

// }


// named function expressions
/**
 * using a function with a name in
 * function expression
 */
// param1 and param2 are parameters of the function xyz()
var b = function xyz(param1, param2) {
    console.log("b() called " + param1 + " " + param2);
}

function a() {
    console.log("a() called");
}

a();
b(1, 2); // 1 and 2 are arguments
xyz(); // throws reference error: xyz is not defined


// first class functions
// returning function from a function
var b = function () {
    return function () {
        console.log("function returned");
    }
}

console.log(b());

// passing function as an argument
var b = function (param) {
    console.log(param);
}

function xyz() {
    console.log("xyz() as argument");
}

b(xyz);

