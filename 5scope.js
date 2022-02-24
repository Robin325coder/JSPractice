function f1() {
    console.log(a) // 10
    f2()

    // f2() is present lexically inside f1()
    function f2() {
        console.log(a) // 10
    }
}

var a = 10
f1()
