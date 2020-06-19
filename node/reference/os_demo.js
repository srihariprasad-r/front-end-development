const os = require('os');

//os platform
console.log(os.platform());

console.log(os.arch());

//cpu core info
console.log(os.cpus());

//free memory
console.log(os.freemem());

//total memory
console.log(os.totalmem());

//uptime
console.log(os.uptime());