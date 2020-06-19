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
});
