import * as loggerModule from './logger.js'

console.log(loggerModule)

// Printing LEVELS
console.log(loggerModule.LEVELS)

// Create an object instance
var obj = new loggerModule.Logger("Test");

obj.log("This is a test message");