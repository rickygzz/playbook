/*
  export default allows exporting Logger class and it will be imported
  as follows:

  import MyLogger from './logger.js'
*/

export default class Logger {
  constructor (name) {
    this.name = name
  }

  log (message) {
    console.log(`[${this.name}] ${message}`)
  }
}