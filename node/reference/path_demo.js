const path = require('path');
const { dirname, extname } = require('path');

//Base file name
console.log(__filename, path.basename(__filename));

//Directory name
console.log(__dirname, path.dirname(__filename));

//File extension
console.log(extname(__filename));

//create path object
console.log(path.parse(__filename).base);

//concatenate 
console.log(path.join(__dirname, 'test', 'index.html'));