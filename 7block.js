// a block in JS
{
}

var a = 500
let b = 200
console.log("before block, a = " + a)
console.log("before block, b = " + b)

{
    var a = 10
    let b = 20
    const c = 30

    console.log("inside block, a = " + a)
    console.log("inside block, b = " + b)
    console.log("inside block, c = " + c)
}

console.log("after block, a = " + a)
console.log("after block, b = " + b)
// console.log(c)
