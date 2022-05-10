require('dotenv').config()

if(!process.env.TOKEN && !process.env.KEY){
  throw new Error('There is no configuration with API key and token')
}

let Trello = require("trello");
let trello = new Trello(process.env.KEY, process.env.TOKEN);

let cardTitle = `New Card ${new Date()}`

trello.addCard(cardTitle,
    "LaunchX Card Description",
    "627acee9a04615291bcb215d",
	function (error, trelloCard) {
		if (error) {
			console.log('Could not add card:', error);
		}
		else {
			console.log('Added card:', trelloCard);
		}
	}
);