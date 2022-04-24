const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {
    test("1. Create a new user using UserService", () => {
        const user = UserService.create(1, "rickygzz85", "Ricardo")

        expect(user.username).toBe("rickygzz85")
        expect(user.name).toBe("Ricardo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})