// 1. Object creation with properties

// Object creation
let myCar = new Object();

// Saving value within recently created object
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

// Printing object
console.log(myCar)

// 2. Object declaration with local and public variables

const myModule = (() => {
  // Local context variables
  const privateFoo = "I am a private value, and can only be used within this object"
  const privateBar = [1,2,3,4]
  const baz = "I am a value to be exposed"

  // Variable to save local variables
  const exported = {
    publicFoo: "Public vlaue, can be seen wherever it is called from",
    publicBar: "Another public value",
    publicBaz: baz
  }

  // Exposición de variables locales
  return exported
})()

console.log(myModule)