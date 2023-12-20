// explicit type declaration
let myName: string = "Mario";

// implicit type declaration
let myAge = 42;

let meaningOfLife: number;
let isLoading: boolean;
meaningOfLife = 42;
isLoading = true;

let album: string | number | boolean;
album = "Master of Puppets";
album = 1986;
album = true;

const sum = (a: number, b: string) => {
  return a + b;
};

let postId: string | number;
let isActive: number | boolean | string;

let re: RegExp = /\w+/g;
