/**
 * En JS existen operadores que nos facilitarán hacer ciertas
 * manipulaciones de estructuras de datos. Ve al ejemplo 1_operadores.js y
 * de igual forma crea un archivo de js para cada ejemplo para que lo
 * pruebes por separado.
 */
console.log("\n1. Ejemplo ForEach")
const datos = [ 5, 4, 3, 2, 1 ]

datos.forEach(function(elemento){
    console.log("elemento = " + elemento)
})

/**
 * 2. ForEach
 */
console.log("\n2. Ejemplo For Each")

sum = 0
datos.forEach(function(elemento){
    sum += elemento
    console.log("elemento = " + elemento + ", sum = " + sum)
})
console.log("Suma total " + sum)

/**
 * 3. ForEach
 */
console.log("\n3. Ejemplo ForEach.")
console.log("Print each element on array to uppercase")

const names = ['Jospeh', 'Anna', 'Sandra', 'Jossie', 'Albert']

names.forEach(function(item) {
    console.log(item.toUpperCase())
})

/**
 * 4. map()
 * map() passes each element of the array on which it is invoked to the
 * function you specify, and returns and array containing the values
 * returned by that function.
 */
console.log("\n4. Ejemplo Map.")
console.log("Returns an array indicating true if pair, otherwise false")

mappedDatos = datos.map(function(item){
    // return true if item is a pair
    return !(item % 2);
})

console.log("Array to be mapped: " + datos)
console.log("      Mapped array: " + mappedDatos)

/**
 * 5.
 */
console.log("\n5. Ejemplo Map")
console.log("Return array of names to uppercase")

mappedNames = names.map(function(item){
    return item.toUpperCase()
})

console.log(mappedNames)

/**
 * 6.
 */
console.log("\n6. Ejemplo Map")
console.log("Get array of initials.")

mappedNames2 = names.map(function(item){
    return item.substring(0, 1)
})

console.log(mappedNames2)

/**
 * 7.
 * filter() returns an array containing a subset of elements of the array
 * on which it is invoked. The function you pass to it should be predicate:
 * a function that returns true or false.
 * If the return value is true (or converts to true) then the element
 * passed to the predicate is a member of the returned subset.
 */
console.log("\n7. Ejemplo de Filter")
console.log("Get an array of names starting with J")

filteredNames = names.filter(function(item){
    return item.startsWith('J')
})

console.log(filteredNames)

/**
 * 8.
 */
console.log("\n8. Ejemplo de Filter")
console.log("Get an array of names that contain A or a")

filteredNames = names.filter((item) => item.toUpperCase().includes("A"))

console.log(filteredNames)

/**
 * 9.
 * reduce() combine the elements of an array. It takes two arguments.
 * The first is the function that performs the reduction operation.
 * The second (optional) is an initial value to pass to the function.
 */
console.log("\n9. Ejemplo de Reduce")
console.log("Get max value in array")

max = datos.reduce(function(prevVal, y)
{
    return (prevVal > y ? prevVal : y)
}, 0
)

console.log(max)


/**
 * 10.
 * every() returns true if your predicate function returns true for all
 * elements in the array.
 */
console.log("\n10. Ejemplo de Every")
console.log("Check if all elements are positive")

everyRetVal = datos.every(function(x){
    return x > 0
})

console.log(everyRetVal)

console.log("Check if all elements are even")

everyRetVal = datos.every(function(x){
    return x % 2
})

console.log(everyRetVal)

/**
 * 11.
 * find() returns the first element in the provided array that satisfies
 * the provided testing function. If no values satisfy the testing
 * function, undefined is returned.
 */
console.log("\n11. Ejemplo de Find")
console.log("Return the first name starting with A")
ret = names.find(function(item){
    return item.toUpperCase().startsWith("A")
})

console.log(ret)

/**
 * 12.
 */
console.log("\n12. Ejemplo de Find")
console.log("Return the first name with length = 4")

ret = names.find((item) => item.length == 4)

console.log(ret)

/**
 * 13.
 * findIndex() returns the index of the first element in the array that
 * satisfies the provided testing function. Otherwise, it returns -1,
 * indicating that no element passed the test.
 */
console.log("\n13. Ejemplo de FindIndex")
console.log("Return the index of the first item that ends with 'dra'")


ret = names.findIndex((item) => item.endsWith("dra"))
console.log(names)
console.log(ret)

/**
 * 14.
 * some() returns true if there is at least one element in the array for
 * which the predicate returns true, and returns false if and only if the
 * predicate returns false for all the alements of the array.
 */
console.log("\n14. Ejemplo Some")
console.log("Return true if there is at least one name ending with dra")

ret = names.some(function(item){
    return item.endsWith("dra")
})

console.log(ret)

/**
 * 15.
 */
console.log("\n15. Ejemplo de Sort")

console.log("Unsorted: " + names)
console.log("  Sorted: " + names.sort())

/**
 * 16.
 */
console.log("\n16. Ejemplo de Sort")
console.log("Order list by age ascending")
const users = [
    { name: 'A', age: 150 },
    { name: 'B', age: 50 },
    { name: 'C', age: 100 },
    { name: 'D', age: 22 },
]
  
users.sort((a, b) => { // podemos invocar una función
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})

console.log(users) // sorted ascending

console.log("Order list by age descending")

users.sort((a, b) => { // podemos invocar una función
    if (a.age < b.age) return 1
    if (a.age > b.age) return -1
    return 0
})

console.log(users) // sorted ascending