/*Runs a fade in script if this is the users first visit to the site*/
var brand = document.getElementById("brand");
$(brand).fadeOut(0, function() {brand.src = "../Final/img/Hardhead.png";});
//Waits for the window to load, then runs script.
window.onload = function () {
	//If hasRun doesn't already exist in the users local storage.
	if (!('hasRun' in localStorage)){
		$(brand).fadeIn(3000, function() {brand.src = "../Final/img/Hardhead.png";});
		
		//Adds the hasRun item to local storage. 
		localStorage.setItem("hasRun", true);
	}
	//Otherwise display the brand image quickly.
	else{
		$(brand).fadeIn(0, function() {brand.src = "../Final/img/Hardhead.png";});
	}
};