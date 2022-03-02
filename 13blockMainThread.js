console.log("Start");

setTimeout(function cb() {
    console.log("SetTimeout");
}, 5000);

console.log("End");

/**
 * blocking main thread
 */
// current date and time
let startTime = new Date().getTime();

let endTime = startTime;

// loop runs for 10s
while (endTime <= startTime + 10000) {
    endTime = new Date().getTime();
}

console.log("10 seconds passed");

