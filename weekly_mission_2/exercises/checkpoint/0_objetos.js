// 1. Create an empty object
console.log("1. Create an empty object")
let myObject = {}
console.log(myObject)

// 2. Create an object with properties
console.log("\n2. Create an object with properties")
explorer = {
    firstName: 'Ricardo',
    lastName: 'González'
}
console.log(explorer)


// 3. Create an object with different properties.
console.log("\n3. Create an object with different properties")
explorer = {
    firstName: 'Ricardo',
    lastName: 'González',
    hobbies: [
        'Play the guitar',
        'Draw'
    ]
}
console.log(explorer)
console.log(explorer.hobbies)
console.log(explorer['hobbies'])

// 4. Create an object with methods
console.log("\n4. Create an object with methods")
const objectWithMethods = {
    name: 'Object with methods',
    pi: function(){
        return 3.1416;
    }
}
console.log(objectWithMethods.pi)
console.log("Result: " + objectWithMethods.pi())


// 5. Create an object with a method that recieves parameters.
console.log("\n5. Create an object with a method that recieves parameters")
const objectWithMethods2 = {
    name: 'Object with methods',
    sum: function(x,y){
        return x+y;
    }
}
console.log(objectWithMethods2.sum)
console.log("Result: " + objectWithMethods2.sum(5,7))