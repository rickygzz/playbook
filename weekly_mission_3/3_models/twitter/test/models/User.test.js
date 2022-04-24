const User = require('./../../app/models/User')

describe("Unit test for User class", () => {
    test('1) Create an user object', () => {
        // 
        const user = new User(1, "rickygzz85", "Ricardo González",
            "Ingeniero, soy de Monterrey, apasionado por la tecnología",
            "2022-04-24", "2022-04-24")
        
        // Validamos
        expect(user.id).toBe(1)
        expect(user.username).toBe("rickygzz85")
        expect(user.name).toBe("Ricardo González")
        expect(user.bio).toBe("Ingeniero, soy de Monterrey, apasionado por la tecnología")
        expect(user.dateCreated).toBe("2022-4-24")
        expect(user.lastUpdated).toBe("2022-4-24")
    });

    test('2) Add getters', () => {
         const user = new User(1, "rickygzz85", "Ricardo González",
                "Ingeniero, soy de Monterrey, apasionado por la tecnología",
                "2022-04-24", "2022-04-24")
        
         // Validamos
         expect(user.getUsername).toBe("rickygzz85")
         expect(user.getBio).toBe("Ingeniero, soy de Monterrey, apasionado por la tecnología")
         expect(user.getDateCreated).not.toBeUndefined()
         expect(user.getLastUpdated).not.toBeUndefined()
    });

    test('3) Add setters', () => {
        const user = new User(1, "rickygzz85", "Ricardo González",
                "Ingeniero, soy de Monterrey, apasionado por la tecnología",
                "2022-04-24", "2022-04-24")
        
        user.setUsername = "Juan"
        expect(user.username).toBe("Juan")

        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    });
})