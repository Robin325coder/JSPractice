// attaching a click handler to button
function countButtonClicks() {
    let count = 0;
    document.getElementById("clickMe")
        .addEventListener("click", function xyz() {
            console.log("Button \"clickMe\" clicked", ++count);
        });
}

countButtonClicks();
