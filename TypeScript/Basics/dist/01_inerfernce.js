"use strict";
// Infernce
// TS will know the JS very well
// Infernce is like, when we need to define data types to the varaibales
// for some datatypes, TS already its datatype
//eg
let count = 900; // see here there is no error, TS already knows this is a Number datatype
// let name="rahul" // here getting error
const site = "acedevhub";
const webi = "Ontime";
// we need also define, when the type is not particular datatype
let dontKnow;
function abc(a, b) {
    return a * b;
}
console.log(abc(10, 7));
// Stopped at 24 minutes
