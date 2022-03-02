// // this is a callback function
// function x() {
//     console.log("Namaste JS")
// }

// // this is a higher order function
// function y(x) {
//     x();
// }


// // calculating circles' area and circumference
// /**
//  * Following code has these problems:
//  * - violating DRY (don't repeat yourself) principle - we are rewriting 
//  *   the same code again and again and we are just changing the formula.
//  * - 
//  */
// const radius = [3, 1, 2, 4];

// const calculateArea = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }

// console.log(calculateArea(radius));

// const calculateCircumference = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// }

// console.log(calculateCircumference(radius));

// function calculateDiameter(radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * radius[i]);
//     }
//     return output;
// }

// console.log(calculateDiameter(radius));


/**
 * better way to write the above code.
 * it illustrates functional programming paradigm
 */
const radius = [3, 1, 2, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

const calculateArea = function (arr, logic) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]));
    }
    return output;
}

console.log(calculateArea(radius, area));
console.log(calculateArea(radius, circumference));
console.log(calculateArea(radius, diameter));

/**
 * the function calculateArea() is similar
 * to the functionality of map()
 */
console.log(radius.map(area));


/**
 * to make the function call of calculate()
 * exactly similar to map().
 * to get access to radii in the radius array,
 * we use "this" as it will refer to the current
 * object which is "radius".
 * it is a kind of polyfill for map().
 */
Array.prototype.calculate = function (logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculate(area));

