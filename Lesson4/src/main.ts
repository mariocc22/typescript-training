// Type Aliases, so you can assign your types with variables
// You can't do this with interfaces
type stringOrNumber = string | number;

type stringOrNumberArray = stringOrNumber[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// type alias Mario
let myName: "Mario";
let userName: "Mario" | "Luigi" | "Peach";
userName = "Peach";

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

// this functions doesn't return anything so it's void
const logMsg = (msg: any): void => {
  console.log(msg);
};

logMsg("Hello!");
logMsg(add(1, 2).toString());
logMsg(add(1, 2));

// normal function
let subtract = function (a: number, b: number): number {
  return a - b;
};

// you create your own type for a function, and this are really helpful for basic functions like add, subtract, multiply, divide, etc.
type mathFunction = (a: number, b: number) => number;
let multiply: mathFunction = (a, b) => {
  return a * b;
};

logMsg(multiply(2, 3));

// optional parameters, we need a type guard to check if the parameter is undefined
// and the optional parameter must be the last one ALWAYS
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c === "undefined") {
    return a + b;
  }
  return a + b + c;
};

// default parameters are a way to conditionally assign a value to a parameter
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
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
const total = (...numbers: number[]): number => {
  return numbers.reduce((acc, cur) => acc + cur);
};

logMsg(total(1, 2, 3, 4));

// never type
// this function never returns anything, and explicitly throws an error
const throwError = (msg: string) => {
  throw new Error(msg);
};

// or for infinite loops, if you don't add a condition it will never end and it will infer to be a "never" type , otherwise it will be "void"
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i === 5) {
      break;
    }
  }
};

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of the never type
const numberorString = (input: number | string): string => {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  if (isNumber(input)) {
    return input.toString();
  }
  return throwError("Invalid input");
};
