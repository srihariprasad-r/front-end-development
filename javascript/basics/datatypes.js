//String, Number, Boolean, Number, Undefined, Symbol

const name = 'John'; //String
const age = 35; //Number
const isSchool = true; //Boolean
const rating = 4.5;  //Number
const x = null; 
const y = undefined;
let z; //undefined

console.log(typeof x); //returns object

//concatenate two strings
console.log(`My name is ${name} and I am ${age}`); //template string

const s = 'Hello World';
console.log(s.length); //11
console.log(s.slice(0,3)); //Hel
console.log(s.split(' ')); //[ 'Hello', 'World' ]