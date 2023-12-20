let stringArr = ["one", "two", "three"];
let guitars = ["Gibson", "Fender", 1590];
let myTuple = ["one", 2, true];

stringArr[0] = "four";
stringArr.push("five");

guitars[0] = 1984;
guitars.unshift("Ibanez");

let test = [];
let bands: string[] = [];
bands.push("Metallica");

// orders don't matter
let myTuple2: [string, number, boolean] = ["one", 2, true];
let mixed = ["one", 2, true];

// Objects
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = {};

const exampleObj = {
  prop1: "one",
  prop2: true,
};
exampleObj.prop2 = false;

// this is a type alias for an object with a name property of type string and an active property of type boolean and an albums property of type array of strings or numbers
type Guitarist = {
  name: string;
  active?: boolean; // ? means optional(undefined)
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "Eddie Van Halen",
  active: true,
  albums: ["Van Halen", "Van Halen II", 1984],
};

// this applies the optional property
let JP: Guitarist = {
  name: "Jimmy Page",
  albums: ["Led Zeppelin", "Led Zeppelin II", "1969"],
};

// now in functions in params where you only define the type alias
const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name}!`;
};

console.log(greetGuitarist(JP));

// interfaces, it's very similar to type alias but it's more flexible
interface Bassist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let flea: Bassist = {
  active: true,
  albums: ["Californication", "By The Way"],
};

const greetBassist = (bassist: Bassist) => {
  if (bassist.name) {
    return `Hello ${bassist.name.toUpperCase()}!`;
  }
  return `Hello!`;
};

console.log(greetBassist(flea));

// ENUMS
// Unlike most Typescript features, enums are not a type. They are a way to create a set of named constants that can be referenced using a numeric or string value.

// doing this will assign the number 1 to the first value and then increment by 1 for each value after that, by default it starts at 0
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}
console.log(Grade.C);
