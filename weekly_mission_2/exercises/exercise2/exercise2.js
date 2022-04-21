/**
 * Toma la siguiente lista de explorers:
 * 
 * Sobre esta lista, realiza lo siguiente:
 * 
 * 1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa
 *    FOR EACH
 * 2. Imprime el stack de cada explorer, usa FOR EACH
 * 3. Crea una nueva lista con las listas de stacks de cada explorer, usa
 *    MAP
 * 4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER
 *    (para validar un elemento en un lista se usa el método includes)
 * 5. Busca el primer explorer que sea de la CDMX, usa FIND
 * 6. Obtén la suma de todos los exercises_completed, usa REDUCE
 * 7. Obtén la validación si al menos uno de los explorers tiene la
 *    propiedad exercisesFinished en frontend como true, usa SOME
 * 8. Obtén la validación si todos los explorers tienen la propiedad
 *    isFinished del onboarding como true. Usa EVERY.
 */

const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
]

/**
 * 1.
 */

console.log("\n1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH")

explorers.forEach(function(explorer)
{
    console.log(explorer.name)
})


/**
 * 2.
 */
console.log("\n2. Imprime el stack de cada explorer, usa FOR EACH")

explorers.forEach(function(explorer)
{
    console.log("\nStack de " + explorer.name)

    console.log(explorer.stack)
})

/**
 * 3.
 * 
 * Map object holds key-value pairs where values of any type can be
 * used
 */
console.log("\n3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP")
let newList = new Map()

explorers.forEach(function(explorer)
{
    newList.set(explorer.name, explorer.stack)
})

newList.forEach(function(val, key)
{
    console.log(key + " = " + val)
})


/**
 * 4.
 * 
 * filter() returns an array containing a subset of the elements of the
 * array on which it is invoked.
 * The function you pass to it should be predicate: a function that returns
 * true or false.
 */
console.log("\n4. Obtén la lista de explorers que tengan en su stack \"js\", usa FILTER (para validar un elemento en un lista se usa el método includes)")

filtered = explorers.filter(x => x.stack.includes('js'))

// Alternate solution:
// filtered = explorers.filter(function(x) {
//     return x.stack.includes('js')
// })

console.log(filtered)

/**
 * 5.
 * 
 * find() returns the first element in the provided array that satisfies
 * the provided testing function. If no values satisfy the testing
 * function, undefined is returned.
 */
console.log("\n5. Busca el primer explorer que sea de la CDMX, usa FIND")

// Alternate solution:
// cdmx = explorers.find(element => element.city == 'CDMX')

cdmx = explorers.find(function(element)
{
    return element.city == 'CDMX'
})

console.log(cdmx)

/**
 * 6.
 * 
 * reduce() executes a user-supplied "reducer" callback function on each
 * element of the array, in order, passing in the return value from the
 * calculation on the preceding element.
 * The final result of running the reducer across all elements of the array
 * is a single value.
 */
console.log("\n6. Obtén la suma de todos los exercises_completed, usa REDUCE")

sumExercises = explorers.reduce(function (prevVal, currentVal)
{
    return prevVal + currentVal.exercises_completed
}, 0)

// Alternate solution
//sumExercises = explorers.reduce((prevVal, currentVal) => prevVal + currentVal.exercises_completed, 0)

console.log("Sum exercises " + sumExercises)

/**
 * 7.
 * 
 * some() method tests whether at least one element in the array passes
 * the test implemented by the provided function. It returns true if, in
 * the array, it finds an element for which the provided function returns
 * true.
 * 
 */
console.log("\n7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME")

// Alternate solution
// someValidation = explorers.some((element) => element.missions.frontend.exercisesFinished == true)

someValidation = explorers.some(function (element) {
   return element.missions.frontend.exercisesFinished == true
})

console.log("Validation: " + someValidation)


/***
 * 8.
 * 
 * every() tests whether all elements in the array pass the test
 * implemented by the provided function. It returns a Boolean value.
 */
console.log("\n8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.")


// everyValidation = explorers.every(function(element)
// {
//     return element.missions.onboarding.isFinished == true
// })

everyValidation = explorers.every((element) => element.missions.onboarding.isFinished == true)

console.log("Validation: " + everyValidation)

