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
];

//for
for(let i =0; i < todos.length; i++){
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todo.text);
}

//while
let i = 0;
while(i < 10){
    console.log(i);
    i++;
};

//forEach, map, filter
todos.forEach(function(todo){ 
                console.log(todo.text)
            }
        );

//map takes a function and returns an array
const todoText = todos.map(function(todo){ 
    return todo.text;
}
);

console.log(todoText);

const todofilter = todos.filter(function(todo){ 
    return todo.isCompleted === true;
}
).map(function(todo){
    return todo.text;
});

console.log(todofilter);
