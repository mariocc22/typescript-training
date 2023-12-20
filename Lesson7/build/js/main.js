"use strict";
// index signatures - index signature is a way to describe an object that has properties that are not known ahead of time and are determined at runtime
const todaysTransactions = {
    Pizza: 20,
    Books: 30,
    Job: 100,
};
// access dynamic properties
let prop = "Pizza";
console.log(todaysTransactions[prop]); // this be an error
const todaysNet = (transactions) => {
    let total = 0;
    for (let t in transactions) {
        total += transactions[t];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 25; // this will be an error
console.log(todaysTransactions["Mario"]); // this will be an error because Mario is not a property of the object but TS will not catch it
const student = {
    name: "Mario",
    GPA: 3.5,
    classes: [1, 2, 3],
};
// console.log(student.test); // this will not be an error because of the index signature but it is not a good practice
// lets do loops
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}
// this also works
Object.keys(student).map((key) => {
    console.log(`${key}: ${student[key]}`);
});
// this is a better way to do it
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "GPA");
const incomes = {
    salary: 100,
    bonus: 20,
    sideIncome: 10,
};
// how to loop through this object
for (let key in incomes) {
    console.log(`${key}: ${incomes[key]}`);
}
