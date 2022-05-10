/* Import module */
import * as loggerModule from './logger.js'

console.log(loggerModule)

// Use it as follows:
const obj = new loggerModule.default("a")
obj.log("A message")