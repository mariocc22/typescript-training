"use strict";
// this is a class decorator
class Coder {
    constructor(name, music, age, //private is only accessible inside the class
    lang = "Typescript" //protected is accessible inside the class and its children
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `I am ${this.age} years old`;
    }
}
// instantiate the class
const Mario = new Coder("Mario", "Rock", 26);
console.log(Mario.getAge());
// console.log(Mario.age); // error because age is private
// console.log(Mario.lang); // error because lang is protected
// inheritance
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age); // super is used to call the constructor of the parent class
        this.computer = computer;
        this.computer = computer;
    }
    gtLang() {
        return `I code in ${this.lang}`;
    }
}
const MarioWebDev = new WebDev("Macbook", "Mario", "Rock", 26);
console.log(MarioWebDev.gtLang());
console.log(MarioWebDev.getAge());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} is ${action} the ${this.instrument}`;
    }
}
const MarioGuitarist = new Guitarist("Mario", "Guitar");
console.log(MarioGuitarist.play("playing"));
//  Static methods and properties
class Peeps {
    static getCount() {
        // this can be called without instantiating the class
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0; // static properties are accessible without instantiating the class
// instantiate the class
const MarioPeeps = new Peeps("Mario");
const StevePeeps = new Peeps("Steve");
const AnnaPeeps = new Peeps("Anna");
console.log(MarioPeeps.id); // 1
console.log(StevePeeps.id); // 2
console.log(AnnaPeeps.id); // 3
console.log(Peeps.count); // 3
// Getters and Setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        // getter readonly, get is a special keyword
        return this.dataState;
    }
    set data(value) {
        // setter, set is a special keyword
        // check if the value is an array of strings (validation)
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
        }
        else
            throw new Error("Invalid data type");
    }
}
const myBands = new Bands();
myBands.data = ["Metallica", "AC/DC", "Iron Maiden"];
console.log(myBands.data); // ['Metallica', 'AC/DC', 'Iron Maiden']
myBands.data = [...myBands.data, "Megadeth"];
console.log(myBands.data); // ['Metallica', 'AC/DC', 'Iron Maiden', 'Megadeth']
// myBands.data = "Judast Priest"; // error "Invalid data type
myBands.data = ["Judast Priest"];
console.log(myBands.data); // ['Judast Priest']
