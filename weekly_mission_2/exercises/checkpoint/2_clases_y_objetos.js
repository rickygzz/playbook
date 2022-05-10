/**
 * 1.
 */
console.log("\n1. Create an empty class.")
class Person {
}

console.log(Person)

/**
 * 2.
 */
console.log("\n2. Create an object instance of a class.")
personObject = new Person()
console.log(personObject)

/**
 * 3.
 */
console.log("\n3. Create an object instance of a class with attributes.")
class Student {
    constructor(name, age, courses)
    {
        this.name = name
        this.age = age
        this.courses = courses
    }
}

studentObject = new Student("Ricardo", "36", ["LaunchX", "NodeJS"])

console.log(studentObject)

/**
 * 4.
 */
console.log("\n4. Methods in objects.")

class Instructor {
    constructor(name, lastname, age, courses)
    {
        this.name = name
        this.lastname = lastname
        this.age = age
        this.courses = courses
    }

    getFullName()
    {
        return this.name + " " + this.lastname
    }

}

instructorObject = new Instructor("Ricardo", "Gonzalez", "37", ["LaunchX", "NodeJS"])

console.log(instructorObject.getFullName())

/**
 * 5.
 */
console.log("\n5. Attributes with default values.")

class UserProfile
{
    constructor(name)
    {
        this.name = name
        this.dateCreated = new Date();
    }
}

newUser = new UserProfile("Ricardo")

console.log(newUser.name + " created on " + newUser.dateCreated)

/**
 * 6.
 */
console.log("\n6. Getters")

class Mission
{
    constructor(name, weeksDuration, weeksPassed)
    {
        this.name = name
        this.weeksDuration = weeksDuration
        this.weeksPassed = weeksPassed
    }

    get getWeeks()
    {
        return this.weeksDuration
    }

    get getWeeksLeft()
    {
        return this.weeksDuration - this.weeksPassed
    }

    get getName()
    {
        return this.name
    }
}

nodeJS = new Mission('NodeJS', 6, 2)

console.log(`${nodeJS.getName} mission has ${nodeJS.getWeeksLeft} weeks left out of ${nodeJS.getWeeks}`)

/**
 * 7.
 */
console.log("\n7. Setters")

class MissionV2
{
    constructor(name, weeksDuration, weeksPassed)
    {
        this.name = name
        this.weeksDuration = weeksDuration
        this.weeksPassed = weeksPassed
    }

    set setWeeksPassed(weeks)
    {
        this.weeksPassed = weeks
    }

    get getWeeks()
    {
        return this.weeksDuration
    }

    get getWeeksLeft()
    {
        return this.weeksDuration - this.weeksPassed
    }

    get getName()
    {
        return this.name
    }
}

frontEnd = new MissionV2('FrontEnd', 6, 0)

console.log(`${frontEnd.getName} mission has ${frontEnd.getWeeksLeft} weeks left out of ${frontEnd.getWeeks}`)

frontEnd.setWeeksPassed = 4
console.log(`${frontEnd.getName} mission has ${frontEnd.getWeeksLeft} weeks left out of ${frontEnd.getWeeks}`)

/**
 * 8.
 */
console.log("\n8. Static methods")

class StringHelper
{
    static len(str)
    {
        return str.length
    }
}

s = "This is a string"
console.log(`${s} has ${StringHelper.len(s)} characters`)

/**
 * 9.
 */
console.log("\n9. Inheritance")

class StringHelperExtended extends StringHelper
{

}

console.log(`${s} has ${StringHelperExtended.len(s)} characters`)

/**
 * 10.
 */
console.log("\n10. Overriding methods")

class StringOverride extends StringHelper
{
    static len(str)
    {
        // return twice the length to see if it overrides
        return str.length * 2
    }
}

console.log("If StringOverride.len returns twice the length, it means it successfully overrided the method")
console.log(`${s} has ${StringOverride.len(s)} characters`)