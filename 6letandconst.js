console.log(a) // reference error: a cannot be accessed before initialization
console.log(b) // reference error: a cannot be accessed before initialization

console.log(c) // undefined
console.log(X) // reference error: X is not defined

let a = 10
const b = 100
var c = 100


// syntax error: identifer 'n' has already been declared
let n = 5
let n = 8


// syntax error: const declaration has to be initialized
let d
const k

d = 100
k = 20

console.log(d)
console.log(k)


// type error: const variable cannot be assigned new value
const k1 = 100
k1 = 500
console.log(k1)
