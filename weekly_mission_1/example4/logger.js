class Logger {
    constructor(name) {
      // `this` is a variable used to reference the value in the local context withtin this class.

      // Theses variables are known as attributes.
      this.name = name
    }
  
    // Method
    // this.name is the variable stores within the local context.
    // message is a variable used within info method.
    info (message) {
      console.log(`[Object with name: ${this.name}] info: ${message}`)
    }
  
    // Method
    verbose (message) {
      console.log(`[Object with name: ${this.name}] verbose: ${message}`)
    }
}
  
// Logger class is being exported as follows
module.exports = Logger