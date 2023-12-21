// utility types

// Partial
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

// Partial<Assignment> is the same as { studentId?: string, title?: string, grade?: number, verified?: boolean }
const updateAssignment = (
  assignment: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return {
    ...assignment,
    ...propsToUpdate,
  };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};
// partial of an assignment
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

// Required and Readonly

// Required makes all properties required
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database
  return assign;
};

// can't change the assignment after it's been recorded with Readonly
const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

// recordAssignment(assignGraded); // error
recordAssignment({ ...assignVerified, verified: true }); // works

// Record Type
const hexColorMap: Record<string, string> = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
};

type Students = "Sara" | "Tina" | "Michael";
type LetterGrades = "A" | "B" | "C" | "D" | "F";

// keys will be students, values will be letter grades
// if you try to add a student that isn't in the Students type, you'll get an error
const finalGrades: Record<Students, LetterGrades> = {
  Sara: "A",
  Tina: "B",
  Michael: "C",
};

interface Grades {
  assign1: number;
  assign2: number;
}

// keys will be students, values will be an object with assign1 and assign2 since Grades is an interface with those properties and types
const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 95, assign2: 100 },
  Tina: { assign1: 80, assign2: 85 },
  Michael: { assign1: 70, assign2: 75 },
};

// Pick and Omit
// Pick allows you to pick certain properties from an interface
type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "compsci123",
  grade: 95,
};

// Omit allows you to omit certain properties from an interface
type AssignPreview = Omit<Assignment, "grade" | "verfied">;

const preview: AssignPreview = {
  studentId: "compsci123",
  title: "Final Project",
};

// Exclude and Extract
// they work with string literal and union types

type adjustedGrades = Exclude<LetterGrades, "F">; // A | B | C | D
type highGrades = Extract<LetterGrades, "A" | "B">; // A | B

// NonNullable
// this type removes null and undefined from a union type and leaves the rest
// it's useful for when you have a union type that includes null and undefined and you want to remove them
type AllPossibleGrades =
  | "Dave"
  | "Sara"
  | "Tina"
  | "Michael"
  | null
  | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>; // 'Dave' | 'Sara' | 'Tina' | 'Michael'

// ReturnType
// this type returns the return type of a function type or constructor type expression
// type newAssign = {title: string, points: number}

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>; // {title: string, points: number}

const tsAssign: NewAssign = createNewAssign("TypeScript Assignment", 100);
console.log(tsAssign);

// Parameters
type AssignParams = Parameters<typeof createNewAssign>; // [string, number]

const assignArgs: AssignParams = ["TypeScript Assignment", 100];
const tsAssign2: NewAssign = createNewAssign(...assignArgs);

console.log(tsAssign2);

// Awaited - helps us with the Return type of a promise
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

// Awaited is a utility type that returns the resolved value of a promise
// it's useful for when you have a promise and you want to know what the resolved value will be
// we can use Awaited to get the return type of fetchUsers to use it in a variable or function parameter
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>; // User[]

fetchUsers().then((users) => console.log(users));
