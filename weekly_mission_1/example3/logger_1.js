/*
  This is also a function declaration.

  module.exports will make the function available within another script as
  > const logger = require('./logger')

  use it as follows  :

  > logger("Heeey!")
*/

module.exports = (message) => {
  console.log(`info: ${message}`)
}