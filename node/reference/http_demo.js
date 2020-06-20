const http = require('http');

//create server
http.createServer((req, res) => {
    res.write('Response from server');
    res.end();
    }
).listen(5000, () => {console.log('Sever running!')});
