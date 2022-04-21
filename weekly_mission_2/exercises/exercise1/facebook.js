console.log("1. User object")

const user =
{
    name: 'Ricardo González',
    password: 'efPnuhptEVcyueR956LV',
    id: '1000224433448855',
    dateCreated: '2022-04-18',

    checkPassword: function(pass)
    {
        return pass == this.password
    },

    printLogin: function()
    {
        return `Welcome ${this.name}`
    }
}

if (user.checkPassword('efPnuhptEVcyueR956LV'))
{
    console.log(user.printLogin())
}
else
{
    console.log('Wrong password!')
}

console.log("\n2. Post object")

const post =
{
    owner: 'Ricardo González',
    message: 'This is my first post, say hi :)',
    likes: 20,
    shares: 3,
    comments: [
        {
            user: 'Benito Juarez',
            message: 'Welcome to FB!'
        },
        {
            user: 'Sandra Gomez',
            message: 'Hey Ricardo! Nice to see you around here'
        },
        {
            user: 'Jenn Hopkins',
            message: 'Hello my friend'
        }
    ],

    getComments: function()
    {
        var sReturn = ''
        this.comments.forEach(function(element, index)
        {
            sReturn += `\nComment #${index+1} `
            sReturn += `${element.user} commented: ${element.message}`
        })

        return sReturn
    },

    getLikesAndShares: function()
    {
        return `Likes ${this.likes}, Shares: ${this.shares}`
    }
}

console.log(`${post.owner} posted: ${post.message}`)
console.log(post.getLikesAndShares())
console.log(post.getComments())

console.log("\n3. Biography object")

const biography = 
{
    user: 'Ricardo González',
    userID: '1000224433448855',
    gender: 'Male',
    description: 'I am a LaunchX programmer',
    employment: 'Self-employed',
    livesIn: 'Guadalupe, Nuevo Leon',
    from: 'Monterrey, Nuevo Leon',

    getUserInfo: function()
    {
        return `from ${this.from} and lives in ${this.livesIn}`
    },

    getHome: function()
    {
        return `${this.livesIn}`
    }
}

console.log(`${biography.user} is `)
console.log(biography.getUserInfo())
console.log('Biography: ' + biography.description)