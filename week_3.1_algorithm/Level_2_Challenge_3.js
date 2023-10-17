// Challenge 3: Traffic Light
// Write a function called checkLight that accepts the color of a traffic light ("red", "yellow", "green") as an argument.
// The function should return "Stop" if the light is red, "Ready" if the light is yellow, and "Go" if the light is green.
// Usage examples:
// console.log(checkLight("red")); // "Stop"
// console.log(checkLight("yellow")); // "Ready"
// console.log(checkLight("green")); // "Go"

function checkLight(color) {
    switch (color.toUpperCase()) {
        case "RED":
            return "STOP";
            break;
        case "YELLOW":
            return "READY";
            break;
        case "GREEN":
            return "GO";
            break;
        default:
            return "Invalid";
            break;
    }
}

console.log(checkLight("red")); // "Stop"