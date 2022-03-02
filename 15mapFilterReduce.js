const arr = [5, 1, 3, 2, 6];

// const output = arr.map(double);
// const output2 = arr.map(triple);
const output3 = arr.map(binary);

// console.log(output);
// console.log(output2);

// giving "undefined" as output
console.log(output3);

// function double(x) {
//     return 2 * x;
// }

// function triple(x) {
//     return 3 * x;
// }


function binary(x) {
    x.toString(2);    
}

