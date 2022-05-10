const FizzbuzzService = require('../../lib/services/FizzbuzzService')

describe("Tests para FizzbuzzService", () => 
{
    test("Requerimiento 1: Calcular todos los explorers", () => {
        const explorers = [{ score: 3 }];
        const validatedExplorer = FizzbuzzService.applyValidationInExplorer(explorers[0])

        expect(validatedExplorer.trick).toBe("FIZZ");
    })
});