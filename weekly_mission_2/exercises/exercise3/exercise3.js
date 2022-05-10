/**
 * Considering exercise1 as a reference, convert those objects to
 * class definitions. Try to apply all we have seen in the examples.
 */

 console.log("\n1. Repo class")

 class Repo {
    constructor(name, author, language, numberOfCommits, stars, forks)
    {
        this.name = name
        this.author = author
        this.language = language
        this.numberOfCommits = numberOfCommits
        this.stars = stars
        this.forks = forks

        this.issues_closed = 0
        this.issues_open = 0
    }

    set setIssuesOpen(x)
    {
        this.issues_open = x
    }

    set setIssuesClosed(x)
    {
        this.issues_closed = x
    }
 
    get getTotalIssues()
    {
        return this.issues_open + this.issues_closed;
    }

    get getGeneralInfo()
    {
        console.log(`This repository \"${this.name}\" was created by ${this.author}`)
    }
 }

ricardosRepo = new Repo('Ricardo\'s repo', 'Ricardo González', 'en',
    10, 1, 2, 3, 8)

ricardosRepo.setIssuesOpen = 3
ricardosRepo.setIssuesClosed = 8
 
console.log("Repository name: " + ricardosRepo.name)
console.log("Total issues: " + ricardosRepo.getTotalIssues)
ricardosRepo.getGeneralInfo
 
 
console.log("\n2. Issue class")
 
class Issue {
    constructor(title, repositoryNameAssociated, author)
    {
        this.title = title
        this.repositoryNameAssociated = repositoryNameAssociated
        this.status = 'open'
        this.numberOfCommits = ''
        this.labels = []
        this.author = author

        var today = new Date()
        this.dateCreated = today.getFullYear() + '-'
            + (today.getMonth()+1)
            + '-' + today.getDate()

        this.lastUpdated = today.getFullYear() + '-'
            + (today.getMonth()+1)
            + '-' + today.getDate()

    }

    set setStatus(x)
    {
        this.status = x
    }

    set setNumberOfComments(x)
    {
        this.numberOfComments = x
    }

    set addLabel(x)
    {
        this.labels.push(x)
    }

    setLastUpdated()
    {
        var today = new Date()
        this.lastUpdated = today.getFullYear() + '-'
            + (today.getMonth()+1)
            + '-' + today.getDate()
    }
 
    get getTitleAndAuthor()
    {
        return `Title: ${this.title}, Author: ${this.author}`
    }

    get getGeneralInfo()
    {
        return `Status: ${this.status}, Labels: [${this.labels}]\nDateCreated: ${this.dateCreated}, DateModified: ${this.lastUpdated}`
    }
}

issue = new Issue('New issue', 'Ricardo\'s repo', 'Ricardo González')

console.log("Created: " + issue.dateCreated)

issue.setNumberOfComments = 3

console.log("Labels (before adding): " + issue.labels)
issue.addLabel = 'LaunchX'
issue.addLabel = 'important'

// Call method
issue.setLastUpdated()

console.log("Labels: " + issue.labels)

// Getters
console.log(issue.getTitleAndAuthor)
console.log(issue.getGeneralInfo)
 
 
console.log("\n3. PullRequest class")

class PullRequest
{
    constructor(title, branchName, author, repositoryNameAssociated)
    {
        this.title = title
        this.branchName = branchName

        this.author = author

        var today = new Date()
        this.dateCreated = today.getFullYear() + '-'
            + (today.getMonth()+1)
            + '-' + today.getDate()

        this.status = 'open'

        this.repositoryNameAssociated = repositoryNameAssociated
    }

    set setStatus(x)
    {
        this.status = x
    }

    get getStatus()
    {
        return this.status;
    }
 
    get getTitleAndAuthor()
    {
        return `Title: ${this.title}, Author: ${this.author}`
    }
}

pullRequest = new PullRequest('Found an error on X class', 'main',
                'Ricardo González Garza', 'rickygzz/LaunchX')

console.log('Status: ' + pullRequest.getStatus)

pullRequest.setStatus = 'closed'

console.log('Status: ' + pullRequest.getStatus)

console.log(pullRequest.getTitleAndAuthor)