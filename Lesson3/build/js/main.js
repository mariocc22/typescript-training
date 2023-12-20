"use strict";
let stringArr = ["one", "two", "three"];
let guitars = ["Gibson", "Fender", 1590];
let myTuple = ["one", 2, true];
stringArr[0] = "four";
stringArr.push("five");
guitars[0] = 1984;
guitars.unshift("Ibanez");
let test = [];
let bands = [];
bands.push("Metallica");
// orders don't matter
let myTuple2 = ["one", 2, true];
let mixed = ["one", 2, true];
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = {};
const exampleObj = {
    prop1: "one",
    prop2: true,
};
exampleObj.prop2 = false;
let evh = {
    name: "Eddie Van Halen",
    active: true,
    albums: ["Van Halen", "Van Halen II", 1984],
};
// this applies the optional property
let JP = {
    name: "Jimmy Page",
    albums: ["Led Zeppelin", "Led Zeppelin II", "1969"],
};
// now in functions in params where you only define the type alias
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(JP));
let flea = {
    active: true,
    albums: ["Californication", "By The Way"],
};
const greetBassist = (bassist) => {
    if (bassist.name) {
        return `Hello ${bassist.name.toUpperCase()}!`;
    }
    return `Hello!`;
};
console.log(greetBassist(flea));
// ENUMS
// Unlike most Typescript features, enums are not a type. They are a way to create a set of named constants that can be referenced using a numeric or string value.
// doing this will assign the number 1 to the first value and then increment by 1 for each value after that, by default it starts at 0
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.C);
