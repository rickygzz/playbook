/*
This example includes dependencies. In the command line, run `npm install`
to download and install all its dependencies. This will create a folder
named `node_modules`
*/

export default class Pokemon {
    constructor(name, type, age){
      this.name = name
      this.type = type
      this.age = age
      this.attacks = []
    }
  
    get getAttacks(){
      return this.attacks
    }
  
    set setAttacks(attacks){
      return this.attacks = attacks
    }
  }
  
  const myPokemon = new Pokemon("Charmander", "Fire", 10)
  console.log(myPokemon)