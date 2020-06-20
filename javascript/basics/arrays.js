//Arrays - variables that hold multiple values

const numbers = [1,2,3,4,5,6,'apples','fruits',true];
//numbers = []; //cannot reassign
//numbers[9] = 7;

numbers.push(8); //above statement will push to last position
numbers.unshift('first'); //prepend
numbers.pop();

//console.log(numbers);
console.log(Array.isArray(numbers)); //true
console.log(numbers.indexOf('fruits')); //8