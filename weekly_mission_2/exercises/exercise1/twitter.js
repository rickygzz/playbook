console.log("\n1. User object")

const user = 
{
    name: 'Ricardo González',
    username: 'rickygzz85',
    bio: 'Ingeniero de Monterrey',
    following: 66,
    followers: 10,
    dateJoined: '2022-04',

    getData: function()
    {
        return `${this.name} @${this.username}\n${this.followers} followers and follows ${this.following} accounts`
    }
}

console.log("User " + user.username)
console.log("Bio: " + user.bio)
console.log(user.getData())


console.log("\n2. Trending topic object")

const trending_topic =
{
    hashes: [
        {
            hash: 'HomeOffice',
            tweets: 37100
        },
        {
            hash: 'Litio',
            tweets: 186000
        },
        {
            hash: 'FelizMiercoles',
            tweets: 11300
        }
    ],

    getTrendingTopic: function(element)
    {
        return `#${element.hash} with ${element.tweets} tweets`
    }
}

trending_topic.hashes.forEach(function(element, index)
{
    console.log(`Trending topic ${index+1}: `
        + trending_topic.getTrendingTopic(element))
})


console.log("\n3. Hashtag object")

const hashtag1 = 
{
    hash: 'HomeOffice',
    tweets: 37100,

    getTweets: function()
    {
        return this.tweets
    },

    getData: function()
    {
        return `Hash #${this.hash} (${this.tweets} tweets)`
    }
}

console.log(hashtag1.getTweets() + " tweets")
console.log(hashtag1.getData())