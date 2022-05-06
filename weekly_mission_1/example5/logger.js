class Logger {
    constructor(name) {
      // At object creation, these values will be saved
      this.count = 0
      this.name = name
    }
  
    log(message) {
      // Increase internal counter each time this method is called
      this.count++;
      console.log('[' + this.name + '] ' + message)
    }
}

// Export object instance
module.exports = new Logger('DEFAULT')