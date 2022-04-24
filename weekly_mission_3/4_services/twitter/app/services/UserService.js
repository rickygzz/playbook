const User = require("../models/User")

class UserService
{
    constructor()
    {

    }

    static create(id, username, name)
    {
        return new User(id, username, name, "Sin bio")
    }
}

module.exports = UserService