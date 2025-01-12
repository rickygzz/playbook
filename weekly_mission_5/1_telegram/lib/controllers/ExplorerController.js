const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");

class ExplorerController
{
    static getExplorersByMission(mission)
    {
        const explorers = Reader.readJsonFile("explorers.json");

        const explorersInNode = ExplorerService.filterByMission(explorers, mission);

        return explorersInNode;
    }

    static getExplorersUsernamesByMission(mission)
    {
        const explorers = Reader.readJsonFile("explorers.json");

        const usernames = ExplorerService.getExplorersUsernamesByMission(explorers, mission);

        return usernames;
    }

    static getExplorersAmountByMission(mission)
    {
        const explorers = Reader.readJsonFile("explorers.json");

        const amount = ExplorerService.getAmountOfExplorersByMission(explorers, mission);

        return amount;
    }

    static getFizzbuzzTrick(number)
    {
        const numberToApplyFb = parseInt(number);
    
        if(!isNaN(numberToApplyFb)){
            const fizzbuzzTrick = FizzbuzzService.applyValidationInNumber(numberToApplyFb);
    
            return `Your number is: ${numberToApplyFb}. Validation: ${fizzbuzzTrick}`;
        }
        
        return "Please send a valid number";
    }
}

module.exports = ExplorerController;