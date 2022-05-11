const FizzbuzzService = require('../../lib/services/FizzbuzzService')

describe("FizzbuzzService tests", () => 
{
    /**
     * applyValidationInExplorer
     */
    test("Requirement 1: applyValidationInExplorer score=1", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        const validatedExplorer = FizzbuzzService.applyValidationInExplorer(explorer1);

        expect(validatedExplorer.trick).toBe(1);
    });

    test("Requirement 2: applyValidationInExplorer score=3", () => {
        const explorer3 = {name: "Explorer3", score: 3};
        const validatedExplorer = FizzbuzzService.applyValidationInExplorer(explorer3);

        expect(validatedExplorer.trick).toBe("FIZZ");
    });

    test("Requirement 3: applyValidationInExplorer score=5", () => {
        const explorer5 = {name: "Explorer5", score: 5};
        const validatedExplorer = FizzbuzzService.applyValidationInExplorer(explorer5);

        expect(validatedExplorer.trick).toBe("BUZZ");
    });

    test("Requirement 4: applyValidationInExplorer score=15", () => {
        const explorer15 = {name: "Explorer15", score: 15};
        const validatedExplorer = FizzbuzzService.applyValidationInExplorer(explorer15);

        expect(validatedExplorer.trick).toBe("FIZZBUZZ");
    });
});