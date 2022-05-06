// logger.js

// This function will saved within this module as info
exports.info = (message) => {
    console.log(`info: ${message}`)
}

// This function will be saved within this module as verbose
exports.verbose = (message) => {
    console.log(`verbose: ${message}`)
}
  
/*
This code is placed within main.js to use logger module.

const logger = require('./logger')
logger.info('This is an informational message')
logger.verbose('This is a verbose message')
* */