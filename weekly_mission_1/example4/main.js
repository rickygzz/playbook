// Invoke the module containing the Logger class
const Logger = require('./logger')

// Create a new object
// This will call the class' default constructor.
const dbLogger = new Logger('DB')

// Invoke method
dbLogger.info('This is an informational message')

// Create another object
const accessLogger = new Logger('ACCESS')
accessLogger.verbose('This is a verbose message')