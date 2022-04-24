class User
{
    constructor(id, username, name, bio, dateCreated, lastUpdated)
    {
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio

        var todayDate = new Date()
        var today = todayDate.getFullYear() + '-'
            + (todayDate.getMonth()+1)
            + '-' + todayDate.getDate()
        
        this.dateCreated = today
        this.lastUpdated = today
    }

    get getUsername()
    {
        return this.username
    }

    get getBio()
    {
        return this.bio
    }

    get getDateCreated()
    {
        return this.dateCreated
    }

    get getLastUpdated()
    {
        return this.lastUpdated
    }

    set setUsername(username)
    {
        this.username = username
    }

    set setBio(bio)
    {
        this.bio = bio
    }
}

module.exports = User