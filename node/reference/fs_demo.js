const fs = require('fs');
const path = require('path');
const { dirname } = require('path');

//create folder
fs.mkdir(path.join(__dirname,'/test'), {}, err => {
    if (err) throw err;
    console.log('folder created');
});

//create and write to file
fs.writeFile(path.join(__dirname,'/test','hello.txt'), 'Hello!', err => {
    if (err) throw err;
    console.log('file created');

    //append to a file
    fs.appendFile(path.join(__dirname,'/test','hello.txt'), 'Have a good day!', err => {
        if (err) throw err;
        console.log('file created');
    });
});

//read file
fs.readFile(path.join(__dirname,'/test','hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});