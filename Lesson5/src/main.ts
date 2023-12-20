type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
let a: One = "hello";
let b = a as Two; // less specific type
let c = a as Three; // more specific type

// this cannot be done in TSX files in React
let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") {
    return a + b;
  } else {
    return `${a}${b}`;
  }
};

// THis is a type assertion, ignore the warning from TS
let myVal: string = addOrConcat(1, 2, "concat") as string;

// Be careful! This will not throw an error TS sees no problem but is a string not a number
let nextVal: number = addOrConcat(1, 2, "concat") as number;

10 as unknown as string; // this is fine but not recommended, overrules TS

// The DOM and type assertions
const img = document.querySelector("img") as HTMLImageElement;
const myImg = document.getElementById("#img")! as HTMLImageElement; // ! tells TS that this will never be null, it's better to just use HTMLImageElement

img.src;
myImg.src;
