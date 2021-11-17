function evalthing() {
    try {
        throw new EvalError('Error message for the user','internalError.js', 10);   // can have 3 args string string number or mesage mesage or mesage number
      } catch (e) {
        console.log(e instanceof EvalError); // true
        console.log(e.message);              // "Error message for the user"
        console.log(e.name);                 // "EvalError" name of the object
        console.log(e.fileName);             // "someFile.js"           not there
        console.log(e.lineNumber);           // 10                      not there
        console.log(e.columnNumber);         // 0                       not there
        console.log(e.stack);                // "@Scratchpad/2:2:9\n"
      }
}

module.exports = {
  evalthing
}