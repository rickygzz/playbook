/*
  To export a function or object in this way:

  > module.exports.verbose

  We will be exporting its content with the name ``verbose

  module.exports will make the verbose function available within another script as:
  > const logger = require('./logger')

  use it as follows:

  > logger.verbose("Heeey!")
*/

module.exports.verbose = (message) => {
  console.log(`verbose: ${message}`)
}