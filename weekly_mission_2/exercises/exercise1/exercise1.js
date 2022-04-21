console.log("\n1. Repo object")

const repo = {
    name: 'Ricardo\'s repo',
    author: 'Ricardo González',
    language: 'en',
    numberOfCommits: 10,
    stars: 1,
    forks: 2,
    issues_open: 3,
    issues_closed: 8,

    getTotalIssues: function()
    {
        return this.issues_open + this.issues_closed;
    },

    // Alternative
    // getGeneralInfo: function()
    getGeneralInfo()
    {
        console.log(`This repository \"${this.name}\" was created by ${this.author}`)
    }
}

console.log("Repository name: " + repo.name)
console.log("Total issues: " + repo.getTotalIssues())
repo.getGeneralInfo()


console.log("\n2. Issue object")

const issue = {
    title: 'New issue',
    repositoryNameAssociated: 'Ricardo\'s repo',
    status: 'open',
    numberOfComments: 3,
    labels: [
        "LaunchX", "important"
    ],
    author: 'Ricardo González',
    dateCreated: '2022-04-16',
    lastUpdated: '2022-04-17',

    getTitleAndAuthor: function()
    {
        return `Title: ${this.title}, Author: ${this.author}`
    },

    getGeneralInfo: function()
    {
        return `Status: ${this.status}, Labels: [${this.labels}]\nDateCreated: ${this.dateCreated}, DateModified: ${this.lastUpdated}`
    }
}

console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())


console.log("\n3. PullRequest object")

const pullRequest = 
{
    title: 'Found an error on X class',
    author: 'Ricardo González',
    branchName: 'main',
    dateCreated: '2022-04-17',
    status: 'open',
    repositoryNameAssociated: 'rickygzz/LaunchX',

    getStatus: function()
    {
        return this.status;
    },

    getTitleAndAuthor: function()
    {
        return `Title: ${this.title}\nAuthor: ${this.author}`
    }
}

console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleAndAuthor())