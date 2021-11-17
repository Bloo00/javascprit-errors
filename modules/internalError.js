function loop(x) {
    if (x >= 10) // "x >= 10" is the exit condition
        return;
    // do stuff
    console.log("hi");
    loop(x + 1); // the recursive call
}

function brokenloop(x) {
    if (x >= 1000000000000)
        return;
    // do stuff
    brokenloop(x + 1);
}

// InternalError: too much recursion

module.exports = { loop, brokenloop}