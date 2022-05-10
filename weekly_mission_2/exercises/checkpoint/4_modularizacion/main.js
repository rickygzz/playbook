import Traveler from './viajero.js'

/**
 * This is an example of how to modularize classes and use them through
 * modules.
 */

const traveler1 = new Traveler("Carlo", "LaunchX", "Node JS", "April 2022")
console.log(traveler1)

// Parent class (Explorer) method
console.log(traveler1.getNameAndUsername())

// Child class (Viajero) method
console.log(traveler1.getGeneralInfo())