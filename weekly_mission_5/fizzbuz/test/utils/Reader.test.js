const Reader = require("../../lib/utils/Reader");

describe("Reader tests", () => 
{
    test("Requirement 1: Read a file", () => {
        const explorers = Reader.readJsonFile("./explorers.json");

        expect(explorers.length).toBe(15);
    });
});