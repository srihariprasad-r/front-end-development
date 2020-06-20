class Person {
    constructor(fname, lname, dob) {
        this.fname = fname;
        this.lname = lname;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();    
    };
    
    getFullName() {
        return `${this.fname} ${this.lname}`;
    }    
};

const person1 = new Person('John','Deere', '09-01-1888');
console.log(person1); //Person { fname: 'John', lname: 'Deere', dob: '09-01-1888' }