const ExplorerService = require("../../lib/services/ExplorerService");

describe("ExplorerService tests", () => 
{
    test("Requirement 1: filterByMission", () => {
        const explorers = [{ mission: "node" }, { mission: "java" }, { mission: "node" }];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(2);
    });

    test("Requirement 2: getAmountOfExplorersByMission", () => {
        const explorers = [{ mission: "node" }, { mission: "java" }, { mission: "node" }];
        const amount = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(amount).toBe(2);
    });

    test("Requirement 3: getExplorersUsernamesByMission", () => {
        const explorers = [{ mission: "node", githubUsername: "name1" }, { mission: "java", githubUsername: "name2" }, { mission: "node", githubUsername: "name3" }];
        const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(usernamesInNode).toStrictEqual(["name1", "name3"]);
    });
});