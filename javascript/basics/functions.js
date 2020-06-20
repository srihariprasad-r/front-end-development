function addNums(num1, num2 = 1) {
    return num1 + num2;
};

addNums(4); //returns 5

//arrow function
const addNum = (num1 , nums2 = 1) => num1 + nums2;

console.log(addNum(3));

//construction functions with prototype
function Person(fname, lname, dob) {
    this.fname = fname;
    this.lname = lname;
    this.dob = new Date(dob);
};

Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();    
};

Person.prototype.getFullName = function(){
    return `${this.fname} ${this.lname}`;
}

//instantiate object
const person1 = new Person('John','Deere', '09-01-1888');
console.log(person1); //Person { fname: 'John', lname: 'Deere', dob: '09-01-1888' }
console.log(person1.dob);   //1888-08-31T18:38:50.000Z
//console.log(person1.dob.getFullYear()); //1888
console.log(person1.getBirthYear());
console.log(person1.getFullName());