//console.log(window); //parent object of browser

//Single Element selectors
const form = document.getElementById('my-form');
console.log(form);

const querysel = document.querySelector('.container');
console.log(querysel);

console.log(document.querySelector('h1'));

//Mutiple element selector
console.log(document.querySelectorAll('.item')); //can be class, id, tags etc

console.log(document.getElementsByClassName('item'));   //can be only classes
console.log(document.getElementsByTagName('li'));

//looping through the dom elements
const item = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

//manipulating DOM