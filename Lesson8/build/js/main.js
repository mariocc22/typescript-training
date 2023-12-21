"use strict";
// generics
// this is a generic function and works with any type
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
// examples
console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));
// you need a generic when you want to use a type that is not known yet
// for example, you want to create a function that returns the first element of an array
// but you don't know what type of array it is
// so you use a generic type
const firstElement = (arr) => arr[0];
// example #2
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return {
        arg,
        is: !!arg, // !! converts any value to a boolean
    };
};
// results
console.log(isTrue(true));
console.log(isTrue("John"));
console.log(isTrue([1, 2, 3]));
console.log(isTrue({ name: "John" }));
console.log(isTrue(null));
console.log(isTrue([]));
console.log(isTrue({}));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return {
        value: arg,
        is: !!arg, // !! converts any value to a boolean
    };
};
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: "John" }));
// console.log(processUser({  name: 'John' }));
// example #4 - generics with classes
// T means any type which extends from the HasID interface (which has an id property)
// K means any key of the T type (which is the HasID interface) - in this case, id
// the function returns an array of the values of the id property of the users
// the function can be used with any type that has an id property
// T and K are generic types and can be replaced with any other letter but it is a convention to use T and K
// this function help us to get the values of a specific property of an array of objects
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
const usersArray = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496",
            },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618",
            },
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
        },
    },
];
console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));
// example #5 - generics with classes
class StateObject {
    constructor(data) {
        this.data = data;
    }
    get state() {
        return this.data;
    }
    set state(data) {
        this.data = data;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Jane";
// store.state = 13; // error
// this is a generic class where the generic type can be a string, number or boolean as long as it is an array
const myState = new StateObject([1]);
myState.state = [1, "John", true];
