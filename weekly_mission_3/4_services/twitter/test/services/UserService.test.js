const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {
    test("1. Create a new user using UserService", () => {
        const user = UserService.create(1, "rickygzz85", "Ricardo")

        expect(user.username).toBe("rickygzz85")
        expect(user.name).toBe("Ricardo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "rickygzz85", "Ricardo")
        const userInfoInList = UserService.getInfo(user)

        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("rickygzz85")
        expect(userInfoInList[2]).toBe("Ricardo")
        expect(userInfoInList[3]).toBe("Sin bio")
    })
})