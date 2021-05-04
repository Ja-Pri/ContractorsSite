/*Validates the contact form*/
var getProject = document.getElementById("getProj");
//Adds an event listener for the form submit.
getProject.addEventListener("submit", function(event) {
	//Gets the values needed and the regex to validate them.
	var name = document.getElementById("name").value,
		phone = document.getElementById("phone").value,
		email = document.getElementById("email").value,
		msg = document.getElementById("msg").value,
		warning = document.getElementById("warning"),
		nameMatch = /^[A-Za-z]+\s[A-Za-z]+$/,
		phoneMatch = /^\(\d{3}\)-\d{3}-\d{4}$/,
		emailMatch = /^\S+@\S+\.\S+$/;
	event.preventDefault();
	//If any of the items are not valid, display a warning, else print success.
	if (!nameMatch.test(name)) {
		warning.innerHTML = "Please enter your full name.";
	}
	else if (!phoneMatch.test(phone)) {
		warning.innerHTML = "Invalid phone number, please enter as (xxx)-xxx-xxxx.";
	}
	else if (!emailMatch.test(email)) {
		warning.innerHTML = "Please enter a valid email address.";
	}
	else {
		//Sends data to the funtion in formconfirm.js
		confirmation(name, phone, email, msg);
	}
}, false);