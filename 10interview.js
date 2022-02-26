/**
 * closures
 */
function outer() {
    var a = 10;

    function inner() {
        console.log(a);
    }

    return inner;
}

/**
 * calling function inner() by writing one more
 * parentheses in outer() function call
 */
outer()();

/**
 * another way to call inner()
 */
var close = outer();
close();

/**
 * moving variable declaration after inner()
 * definition will not affect closure of inner()
 */
function outer() {
    function inner() {
        console.log(a);
    }

    var a = 10;

    return inner;
}
outer()();

/**
 * changing the var declaration to let will not
 * change the properties of closure formed by
 * function inner() and it will behave in the same way
 */
 function outer() {
    function inner() {
        console.log(a);
    }

    let a = 10;

    return inner;
}
outer()();

/**
 * passing argument to function outer().
 *
 * here inner() will form a closure including the
 * parameters of the outer() too.
 */
function outer(b) {
    function inner() {
        console.log(a + " " + b);
    }

    let a = 10;

    return inner;
}
outer("hello world")();

/**
 * nesting outer() and inner() in one
 * more function.
 *
 * inner() will form a closure with outer()
 * and moreOuter().
 */
function moreOuter() {
    let c = 30;
    function outer(b) {
        function inner() {
            console.log(a + " " + b + " " + c);
        }

        let a = 10;

        return inner;
    }
    return outer;
}
moreOuter()("hello")();

/**
 * declaring variable "a" in the global scope.
 * 
 * the global scope "let" declaration is completely
 * unrelated to outer()'s "let" declaration.
 * 
 * if we comment outer()'s "let" declaration then inner()'s
 * closure will go deep into the hierarchy of lexical environment
 * to search for variable "a" and if it does not find this variable
 * in the scope chain it will throw a reference error.
 */
function moreOuter() {
    let c = 30;
    function outer(b) {
        function inner() {
            console.log(a + " " + b + " " + c);
        }

        let a = 10;

        return inner;
    }
    return outer;
}
let a = 50;
moreOuter()("hello")();


/**
 * data hiding and encapsulation
 */

/**
 * problem with following is that any part of our
 * code can access variable "count"
 */
var count = 0;

function incrementCounter() {
    count++;
}

/**
 * to hide variable "count" we can put above
 * code snippet inside a function
 */
function counter() {
    var count = 0;

    function incrementCounter() {
        count++;
    }
}
// this will throw reference error
console.log(count);

/**
 * to access "count" we need a function
 * because a function inside counter() will form
 * a closure.
 */
function counter() {
    var count = 0;

    function incrementCounter() {
        count++;
        console.log(count);
    }

    return incrementCounter;
}
var counter1 = counter();
counter1();

/**
 * here counter() call will create a new
 * execution context independent of the previous
 * function call so counter2() will be independent
 * of the existence of counter1().
 */
var counter2 = counter();
counter2();


/**
 * is the above code a good way to make a counter?
 * is it scalable?
 * can we also have decrement counter here too?
 * Above code is not a good way. Good way is to make
 * a function constructor
 */
// vs code fix: converted function constructor to class
var count = 0;
class Counter {
    constructor() {
        this.incrementCounter = () => {
            count++;
            console.log(count);
        };

        this.decrementCounter = () => {
            count--;
            console.log(count);
        };
    }
}

/**
 * a function constructor
 */
function Counter() {
    var count = 0;

    this.incrementCounter = () => {
        count++;
        console.log(count);
    }

    this.decrementCounter = () => {
        count--;
        console.log(count);
    }
}

// because counter() is a function constructor so we use "new" keyword
var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
counter1.decrementCounter();


/**
 * relation b/w garbage collector, memory leaks, & closures
 */

/**
 * here function b() forms a closure with variables x & z
 * but it is only referring to variable x in its definition.
 * so the new browser engines like chrome v8 will free up the
 * memory of variable z from the closure of function b() because
 * it is no longer accessed.
 */
function a() {
    var x = 10, z = 20;
    function b() {
        console.log(x);
    }
    return b;
}
var y = a();
//........more line of code

y();

