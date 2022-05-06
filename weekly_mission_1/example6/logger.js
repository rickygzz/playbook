class Logger {
    constructor (name) {
      this.count = 0
      this.name = name
    }
  
    log (message) {
      this.count++
      console.log('[' + this.name + '] ' + message)
    }
}

// Export new object instance
module.exports = new Logger('DEFAULT')

// Export class
module.exports.Logger = Logger