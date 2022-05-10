# API Rest Trello

Visit the Trello's API Rest documentation at https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-group-boards

And do the following:

- 1. Create a new board
- 2. Obtain information about a board from its ID
- 3. Obtain a list of cards inside a board
- 4. Create a new card inside a board

Additionaly:

- 5. Update the title of a card
- 6. Delete a card

## 1. Create a new board

https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-post

The API is documented as follows:

<img src="01 a.png">

<img src="01 b.png">

<img src="01 c.png">


## 2. Obtain information about a board from its ID

First we need to get the ID form the previous query.

<img src="02 a.png">

The API is documented as follows:

<img src="02 b.png">

<img src="02 c.png">


## 3. Obtain a list of cards inside a board

<img src="03 a.png">

<img src="03 b.png">


## 4. Create a new card inside a board

We can notice the board is empty. There is a list called `Lista de tareas`.

<img src="04 a.png">

From the previous query, we identify the id of the `Lista de tareas` list.

<img src="04 b.png">

Send the card name to the `Lista de tareas` list

<img src="04 c.png">

See the new card reflected on the list.

<img src="04 d.png">


## 5. Update the title of a card

To update the title of a card, the API documentation says we need the following:

<img src="05 a.png">

Notice, we will need to get the card `id` with the following API:

<img src="05 b.png">

So we start querying using the second API, to get the card `id`

<img src="05 c.png">

And with the card `id` we use the PUT method indicating the new card name.

<img src="05 d.png">

We verify the change is reflected

<img src="05 e.png">

## 6. Delete a card

To delete a card the API is the following:

<img src="06 a.png">

We set up the API in Postman, using the previously modified card `id`

<img src="06 b.png">

We verify the change is reflected

<img src="06 c.png">
