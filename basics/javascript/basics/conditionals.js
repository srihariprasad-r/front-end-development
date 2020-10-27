const x = 10;


//== will not match data type
if (x == '10'){
    console.log('value is 10!');
} else if (x> 10){
    console.log('Value more than 10');
}
else {
    console.log('value is less than 10');
};

//=== will match data type
if (x === '10'){    //returns nothing
    console.log('value is 10!');
};

//switch case
const color = 'red';

switch(color){
    case red:
        console.log('color is red');
        break;
    case blue:
        console.log('color is blue');        
        break;
    default:
        console.log('color is neither red or blue');
        break;
};