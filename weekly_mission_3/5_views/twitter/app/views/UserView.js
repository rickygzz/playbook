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

        return { error: '' }
    }
}

module.exports = UserView