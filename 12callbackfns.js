// callback function
/**
 * here y() is a callback function because
 * it is passed as an argument to x()
 */
function x(param) {

}

x(function y() {

});

/**
 * understanding asynchronous programming
 * using setTimeout()
 */
setTimeout(function () {
    console.log("timer");
}, 5000);

function x(param) {
    console.log("in x()");
    param();
}

x(function y() {
    console.log("in y()");
});

