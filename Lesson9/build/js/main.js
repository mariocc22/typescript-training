"use strict";
// utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Partial<Assignment> is the same as { studentId?: string, title?: string, grade?: number, verified?: boolean }
const updateAssignment = (assignment, propsToUpdate) => {
    return Object.assign(Object.assign({}, assignment), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
// partial of an assignment
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
// Required and Readonly
// Required makes all properties required
const recordAssignment = (assign) => {
    // send to database
    return assign;
};
// can't change the assignment after it's been recorded with Readonly
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// recordAssignment(assignGraded); // error
recordAssignment(Object.assign(Object.assign({}, assignVerified), { verified: true })); // works
// Record Type
const hexColorMap = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
};
// keys will be students, values will be letter grades
// if you try to add a student that isn't in the Students type, you'll get an error
const finalGrades = {
    Sara: "A",
    Tina: "B",
    Michael: "C",
};
// keys will be students, values will be an object with assign1 and assign2 since Grades is an interface with those properties and types
const gradeData = {
    Sara: { assign1: 95, assign2: 100 },
    Tina: { assign1: 80, assign2: 85 },
    Michael: { assign1: 70, assign2: 75 },
};
const score = {
    studentId: "compsci123",
    grade: 95,
};
const preview = {
    studentId: "compsci123",
    title: "Final Project",
};
// ReturnType
// this type returns the return type of a function type or constructor type expression
// type newAssign = {title: string, points: number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("TypeScript Assignment", 100);
console.log(tsAssign);
const assignArgs = ["TypeScript Assignment", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then((users) => console.log(users));
