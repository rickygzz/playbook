// 1. Crear un objeto vacío
console.log("1. Crear un objeto vacio")
let objeto = {}
console.log(objeto)

// 2. Crear un objeto con propiedades
console.log("\n2. Crear un objeto con propiedades")
explorer = {
    firstName: 'Ricardo',
    lastName: 'González'
}
console.log(explorer)


// 3. Crear un objeto con propiedades diferentes
console.log("\n3. Crear un objeto con propiedades diferentes")
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

// 4. Crear un objeto con métodos
console.log("\n4. Crear un objeto con métodos")
const objetoMetodo = {
    name: 'Objeto con métodos',
    pi: function(){
        return 3.1416;
    }
}
console.log(objetoMetodo.pi)
console.log("Resultado: " + objetoMetodo.pi())


// 5. Crear un objeto que reciba parámetros.
console.log("\n5. Crear un objeto con método que reciban parámetros")
const objetoMetodo2 = {
    name: 'Objeto con métodos',
    sum: function(x,y){
        return x+y;
    }
}
console.log(objetoMetodo2.sum)
console.log("Resultado: " + objetoMetodo2.sum(5,7))