/*Changes the confirmation page after a form is validated and sent*/
//Initializes the variables and gets the confirmation div.
var conf = "",
	cName = "",
	cPhone = "",
	cEmail = "",
	cMsg = "",
	divConf = document.getElementById("confirm");

//Prints a confirmation to the screen based on the data from forms.js.
function confirmation(name, phone, email, msg) {
	//String for the message sent confirmation.
	conf = "<p style='text-align: center; font-family: \"Permanent Marker\", cursive;"+
			"font-size: 1.3em;'>Message successfully sent!" +	
			" A representative will contact you ASAP.</p>" +
			"<h2 class='clearPad'>Your Message Details</h2>";
	//Strings for the information that was sent.
	cName = "<p>Name: " + name + "</p><br>";
	cPhone = "<p>Phone: " + phone + "</p><br>";
	cEmail = "<p>Email: " + email + "</p><br>";
	cMsg =	"<p>Message: " + msg + "</p>";
	//Displays the information on the contact page.
	//Refreshing/returning to the page should return the page to it's default state.
	divConf.innerHTML = conf + cName + cPhone + cEmail + cMsg;
}