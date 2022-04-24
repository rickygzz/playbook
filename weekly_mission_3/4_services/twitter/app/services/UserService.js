const { info } = require("console")
const User = require("../models/User")

class UserService
{
    static create(id, username, name)
    {
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(user)
    {
        var info = []

        info.push(user.id)
        info.push(user.username)
        info.push(user.name)
        info.push(user.bio)

        return info
    }

    static updateUserUsername(user, newUsername)
    {
        user.setUsername = newUsername
    }

    static getAllUsernames(users)
    {
        var sRet = ''

        users.forEach((user) => {
            sRet += user.getUsername + " "
        })

        return sRet
    }
}

module.exports = UserService