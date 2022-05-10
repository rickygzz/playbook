# API Rest Trello

Visit the Trello's API Rest documentation at https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-group-boards

And do the following

## Create a new board

https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-post

The API is documented as follows:

<img src="01 a.png">

<img src="01 b.png">

<img src="01 c.png">


## Obtain information about a board from its ID

First we need to get the ID form the previous query.

<img src="02 a.png">

The API is documented as follows:

<img src="02 b.png">

<img src="02 c.png">


## Obtain a list of cards inside a board

<img src="03 a.png">

<img src="03 b.png">


## Create a new card inside a board

We can notice the board is empty. There is a list called `Lista de tareas`.

<img src="04 a.png">

From the previous query, we identify the id of the `Lista de tareas` list.

<img src="04 b.png">

Send the card name to the `Lista de tareas` list

<img src="04 c.png">

See the new card reflected on the list.

<img src="04 d.png">
