const url = require('url');

const myurl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//serialized url
console.log(myurl.href);

//root domain
console.log(myurl.host);

//hostname
console.log(myurl.hostname);

//pathname
console.log(myurl.pathname);