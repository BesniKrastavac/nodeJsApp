const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }
const myEmitter = new MyEmitter();
myEmitter.on('event', () => console.log('event fired!'))

myEmitter.emit('event')
