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

    test("3. Update username", () => {
        const user = UserService.create(1, "rickygzz85", "Ricardo")

        UserService.updateUserUsername(user, "rickygzz85")

        expect(user.username).toBe("rickygzz85")
    })

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "carlogilmar1", "Carlo")
        const user2 = UserService.create(2, "carlogilmar2", "Carlo")
        const user3 = UserService.create(3, "carlogilmar3", "Carlo")
        
        const usernames = UserService.getAllUsernames([user1, user2, user3])

        expect(usernames).toContain("carlogilmar1")
        expect(usernames).toContain("carlogilmar2")
        expect(usernames).toContain("carlogilmar3")
    })
})