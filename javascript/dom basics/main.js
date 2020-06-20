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
const ul = document.querySelector('ul');
ul.remove();
ul.lastElementChild.remove(); //removes last element in the ul array
uli.children[1].textContent = 'Hi';
uli.lastElementChild.innerHTML='<h4>Hello</h4>'; //dynamic changes to html content

const btn = document.querySelector('.btn');
btn.style.background='red'; //changes the background of button to red

//events
btn.addEventListener('click', (e) => {
    e.preventDefault(); //to prevent default behaviour of button clicks
    console.log(e.target);  //returns the submit div
});

btn.addEventListener('click', (e) => {
    e.preventDefault(); //to prevent default behaviour of button clicks
    document.querySelector('#my-form').style.background = '#ccc'; //changes the background color of the form when click event happens
});

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if (nameInput.value == '' || emailInput.value == ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        
        setTimeout(()=> msg.remove(), 3000);    //removes message after 3 seconds
    } else {
    //if user enters all needed inputs    
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    userList.appendChild(li);
    //clear fields after adding to items list
    nameInput.value= '';
    emailInput.value= '';
}
};