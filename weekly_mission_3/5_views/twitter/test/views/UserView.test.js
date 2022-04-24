const UserView = require('./../../app/views/UserView')

describe("Tests for UserView", () => {
    test("Return an error object when trying to create a new user with a null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)

        // https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/)
    })
})