const logger = require('./logger');

// You can directly use the instanced object `logger` 
logger.log('This is an informational message');

// You can also instanciate an object as follows:
const customLogger = new logger.constructor('CUSTOM');
customLogger.log('This is an informational message');