const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("FizzbuzzService tests", () => 
{
    /**
     * applyValidationInExplorer
     */
    test("Requirement 1: applyValidationInExplorer", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        const validatedExplorer = FizzbuzzService.applyValidationInExplorer(explorer1);

        expect(validatedExplorer.trick).toBe(1);
    });

    test("Requirement 2: applyValidationInExplorer", () => {
        const explorer3 = {name: "Explorer3", score: 3};
        const validatedExplorer = FizzbuzzService.applyValidationInExplorer(explorer3);

        expect(validatedExplorer.trick).toBe("FIZZ");
    });

    test("Requirement 3: applyValidationInExplorer", () => {
        const explorer5 = {name: "Explorer5", score: 5};
        const validatedExplorer = FizzbuzzService.applyValidationInExplorer(explorer5);

        expect(validatedExplorer.trick).toBe("BUZZ");
    });

    test("Requirement 4: applyValidationInExplorer", () => {
        const explorer15 = {name: "Explorer15", score: 15};
        const validatedExplorer = FizzbuzzService.applyValidationInExplorer(explorer15);

        expect(validatedExplorer.trick).toBe("FIZZBUZZ");
    });

    /**
     * applyValidationInNumber
     */
    test("Requirement 1: applyValidationInNumber", () => {
        const ret = FizzbuzzService.applyValidationInNumber(1);

        expect(ret).toBe(1);
    });

    test("Requirement 2: applyValidationInNumber", () => {
        const ret = FizzbuzzService.applyValidationInNumber(3);

        expect(ret).toBe("FIZZ");
    });

    test("Requirement 3: applyValidationInNumber", () => {
        const ret = FizzbuzzService.applyValidationInNumber(5);

        expect(ret).toBe("BUZZ");
    });

    test("Requirement 4: applyValidationInNumber", () => {
        const ret = FizzbuzzService.applyValidationInNumber(15);

        expect(ret).toBe("FIZZBUZZ");
    });
});