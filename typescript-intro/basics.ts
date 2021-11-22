// primitives: number, string, boolean
// more complex type: arrays, objects
// function types, parameters

// primitives
let age: number = 12;
let username: string = "Benja";
let isInstructor: boolean = true;

// more complex types
let hobbies: string[] = ["benja", "barreiro"];

// type aliasses to be re used, instead of repeating code
type Person = {
  name: string;
  age: number;
};
let person: Person = {
  name: "Benja Barreiro",
  age: 23,
};
let people: Person[] = [
  { name: "benja", age: 23 },
  { name: "benja", age: 23 },
];

/* Type inference */
/* 
	let course = 'String' // lo que dice Adrian, si es obvio no declarar el tipo. Total TS utiliza Type Inference
	course = 12345 --> error por inferencia
*/

// union types --> multiple types for a variable
let course: string | number = "React Course";
course = 123355;
let strin: string | string[] = ["string"];

// functions & types
function addd(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  //here TS inferes : void. void is comparable to null or undefined and means that this functions never returns.
  console.log(value);
}

// generics
function insertAtBeginning<T>(array: T[], value: T) { // we define <T> (of Type) to be a generic type/value
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3]; // now it understands this is an array of numbers
const updatedArray = insertAtBeginning(demoArray, -1); // and both values must be of the same type as parameters. si pongo "-1", tira error

const stringArray = insertAtBeginning(['a','b', 'c'], 'd') // it infers it too!
