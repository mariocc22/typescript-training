"use strict";
// type alias Mario
let myName;
let userName;
userName = "Peach";
// functions
const add = (a, b) => {
    return a + b;
};
// this functions doesn't return anything so it's void
const logMsg = (msg) => {
    console.log(msg);
};
logMsg("Hello!");
logMsg(add(1, 2).toString());
logMsg(add(1, 2));
// normal function
let subtract = function (a, b) {
    return a - b;
};
let multiply = (a, b) => {
    return a * b;
};
logMsg(multiply(2, 3));
// optional parameters, we need a type guard to check if the parameter is undefined
// and the optional parameter must be the last one ALWAYS
const addAll = (a, b, c) => {
    if (typeof c === "undefined") {
        return a + b;
    }
    return a + b + c;
};
// default parameters are a way to conditionally assign a value to a parameter
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(1, 2));
logMsg(addAll(1, 2, 3));
logMsg(sumAll(1, 2));
// if you want to skip a parameter you can pass undefined
logMsg(sumAll(undefined, 3));
// HOWEVER this won't work with type aliases because they are not real types and you can't assign a default value to them (you can't do this with interfaces either) so you need to use the real type instead.
// Rest Parameters
// you can pass as many parameters as you want, but they must be the same type
const total = (...numbers) => {
    return numbers.reduce((acc, cur) => acc + cur);
};
logMsg(total(1, 2, 3, 4));
// never type
// this function never returns anything, and explicitly throws an error
const throwError = (msg) => {
    throw new Error(msg);
};
// or for infinite loops, if you don't add a condition it will never end and it will infer to be a "never" type , otherwise it will be "void"
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i === 5) {
            break;
        }
    }
};
const numberorString = (input) => {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    if (typeof input === "number") {
        return input.toString();
    }
    return throwError("Invalid input");
};
