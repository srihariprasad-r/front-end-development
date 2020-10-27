const person = {
    'firstname': 'John',
    'age': 30,
    'hobbies': ['music','movies'],
    'address': {
        'street': '50 main street',
        'city': 'Boston'
    }
}

person.lastname = 'Doe';

console.log(person);
console.log(person.hobbies[1]); //movies
console.log(person.address.city); //Boston

const {firstname, age, address:{city} } = person;
console.log(firstname); //John
console.log(city);

//Arrays of object
const todos = [
    {
        id: 1, 
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2, 
        text: 'Meeting',
        isCompleted: false
    }    
]

console.log(todos[1].text); //Meeting

//JSON

const todojson = JSON.stringify(todos);
console.log(todojson); //[{"id":1,"text":"Take out trash","isCompleted":true},{"id":2,"text":"Meeting","isCompleted":false}]