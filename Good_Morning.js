var login = require("facebook-chat-api")
var shuffle = require("shuffle-array")

var email = "ENTER EMAIL HERE"
var password = "ENTER PASSWORD HERE"


var datetime = new Date();
var day = datetime.getDate();

var messages = ["Good Morning 0",
                "Good Morning 2",
                "Good Morning 3",
                "Good Morning 4",
                "Good Morning 5",
                "Good Morning 6",
                "Good Morning 7",
                "Good Morning 8",
                "Good Morning 9",
                "Good Morning 10",
                "Good Morning 11",
                "Good Morning 12",
                " "]

var lengthOfList = messages.length;

 login({"email": email, "password": password}, function callback (err, api) {
	
	 if (err)
	 		return console.error(err)	

	// To find your friends ID, go to their page, click on their profile picture, and right click on the description box above
	// the comment box. Select "View page source," and then hit CTRL-f. Search for "sharer_id", and the ID will be right after it
	
    var friendsID = "1000000000" // FILL YOUR FRIENDS FACEBOOK ID HERE!

	var msg = {body: messages[(day + lengthOfList) % lengthOfList]}

	 api.sendMessage(msg, friendsID)

})
