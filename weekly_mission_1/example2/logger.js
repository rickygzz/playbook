// logger.js

// Esta es una función que se guardará en este módulo como info
exports.info = (message) => {
    console.log(`info: ${message}`)
}

// Esta es una función que se guardará en este módulo como verbose
exports.verbose = (message) => {
    console.log(`verbose: ${message}`)
}
  
/*
const logger = require('./logger')
logger.info('This is an informational message')
logger.verbose('This is a verbose message')
* */