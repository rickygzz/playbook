class Pokemon{
    constructor(name){
      this.name = name
    }
  
    sayHello(){
      console.log(`My pokemon ${this.name} greets you!!!`)
    }
  
    sayMessage(msg){
      console.log(`My pokemon ${this.name} says: ${msg}`)
    }
}

module.exports = Pokemon