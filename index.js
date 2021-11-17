const evalError = require('./modules/evalError');
// evalError.evalthing();

const rangeError = require('./modules/rangeError');

// try {
//     rangeError.rangeNum(2000)
// }
// catch (error) {
//     if (error instanceof RangeError) {
//         // Handle the error
//         console.log("error");
//     }
// }

// try {
//     rangeError.rangeString("happy")
// }
// catch (error) {
//     if (error instanceof RangeError) {
//         // Handle the error
//         console.log("error");
//     }
// }

const refError = require('./modules/referenceError');
//refError.catchingRefError();
//refError.createRefError();


const syntaxErr = require('./modules/syntaxError');
// syntaxErr.catchSyntaxErr();
// syntaxErr.createSyntaxError();


const typeErr = require('./modules/typeError');
//typeErr.catchTypeErr();
//typeErr.createTypeErr();


const URIErr = require('./modules/ueiError');
// URIErr.catchingURIErr();
// URIErr.creatingURIErr();


const AggErr = require('./modules/aggregateError');
// AggErr.catchAggErr();
// AggErr.createAggErr();


const internalErr = require('./modules/internalError');
try {
    internalErr.brokenloop(122)
}
catch (error) {
    console.log("error");
 }
// internalErr.loop(122);
// internalErr.brokenloop(0);