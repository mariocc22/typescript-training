"use strict";
// convert to more or less specific
let a = "hello";
let b = a; // less specific type
let c = a; // more specific type
// this cannot be done in TSX files in React
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return `${a}${b}`;
    }
};
// THis is a type assertion, ignore the warning from TS
let myVal = addOrConcat(1, 2, "concat");
// Be careful! This will not throw an error TS sees no problem but is a string not a number
let nextVal = addOrConcat(1, 2, "concat");
10; // this is fine but not recommended, overrules TS
// The DOM and type assertions
const img = document.querySelector("img");
const myImg = document.getElementById("#img"); // ! tells TS that this will never be null, it's better to just use HTMLImageElement
img.src;
myImg.src;
