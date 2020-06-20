const EventEmitter = require('events');

//create emitter class
class MyEmitter extends EventEmitter {}

//Initialize object
const myEmitter = new MyEmitter();

//create event listener
myEmitter.on('event', () => console.log('event fired'));

//Initialize emitter
myEmitter.emit('event');

console.log(myEmitter.eventNames());