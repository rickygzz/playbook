const UserService = require("../services/UserService")

class UserView
{
    static createUser(payload)
    {
        if (payload == null)
        {
            return { error: 'payload no existe'}
        }

        var ret = ((payload.username == null) ||
            (typeof payload.username !== 'string') ||
            (payload.name == null) ||
            (typeof payload.name !== 'string') ||
            (payload.id == null) ||
            (Number.isInteger(payload.id) == false))


        if (ret)
        {
            return { error: 'necesitan tener un valor válido' }
        }

        var user = UserService.create(payload.id, payload.username, payload.name)

        return user
    }
}

module.exports = UserView