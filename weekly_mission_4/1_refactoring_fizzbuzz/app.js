const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService")
const FizzbuzzService = require("./lib/services/FizzbuzzService")

// esto regresa la lista de explorers del archivo
const explorers = Reader.readJsonFile("explorers.json");
//console.log(explorers);


// Aplicación del ExplorerService sobre la lista de explorers
explorersInNode = ExplorerService.filterByMission(explorers, "node");
amountOfExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

console.log(usernamesInNode)



const explorer1 = {name: "Explorer1", score: 1}
console.log(FizzbuzzService.applyValidationInExplorer(explorer1)); // {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: "Explorer3", score: 3}
console.log(FizzbuzzService.applyValidationInExplorer(explorer3)); // {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: "Explorer5", score: 5}
console.log(FizzbuzzService.applyValidationInExplorer(explorer5)); // {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: "Explorer15", score: 15}
console.log(FizzbuzzService.applyValidationInExplorer(explorer15)); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}