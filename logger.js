const EventEmitter = require('events');
const uuid = require('uuid');

console.log(uuid.v4());

class Logger extends EventEmitter {
    log(msg) {
        this.emit('message', {id: uuid.v4(), msg})
    }
}

// module.exports = Logger;

console.log(__filename, __dirname);

const Logger = require('./logger');
const logger = new Logger();

logger.on('message', data => console.log(`Called Listener: ${data.msg}`));

logger.log('Hello World!');
logger.log('Hi');
logger.log('Hello!');