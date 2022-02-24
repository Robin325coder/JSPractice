function x() {
    var i = 1;

    setTimeout(() => {
        console.log(i);
    }, 2500);

    console.log("Namaste JS");
}

x();


/**
 * For loop with setTimeout
 */
function x() {
    for (var i = 1; i <= 5; ++i) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }

    console.log("Namaste JS");
}
x();


/**
 * For loop with setTimeout with "let"
 */
function x() {
    for (let i = 1; i <= 5; ++i) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }

    console.log("Namaste JS");
}
x();


/**
 * For loop with setTimeout with "var" but with
 * the output of above code where we used "let"
 */
function x() {
    for (var i = 1; i <= 5; ++i) {
        function closure(j) {
            setTimeout(() => {
                console.log(j);
            }, j * 1000);
        }
        closure(i);
    }

    console.log("Namaste JS");
}
x();

