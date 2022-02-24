/**
 * Version-1
 */
function x() {
    var a = 7

    function y() {
        console.log(a)
    }

    y()
}
x()


/**
 * Version-2:
 * Assigning function to a variable
 */
function x() {
    var a = function y() {
        console.log(a)
    }

    y()
}
x()


/**
 * Version-3:
 * Passing function as an argument
 */
function x() {
    var a = 7

    y()
}
x(function y() {
    console.log(a)
})


/**
 * Version-4:
 * Returning function from a function
 */
function x() {
    var a = 7

    function y() {
        console.log(a)
    }

    return y
}
var z = x()
console.log(z)
//..........many more lines of code
z() //calling y() because var z has been assigned function y()


/**
 * Some deep nesting of functions here
 */
function z() {
    var b = 900
    function x() {
        var a = 7
        function y() {
            console.log(a, b)
        }
        y()
    }
    x()
}
z()

