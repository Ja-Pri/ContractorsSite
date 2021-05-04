/*Scripts for the gallery zoom.*/
//Adds a click event to all of the gallery images.
var images = document.getElementsByClassName("zoom");
if (images.length > 0) {
    for (var img of images) {
		img.addEventListener("click", zoomImg);
    }
}
//Adds a click event to hide the zoomed image.
document.getElementById("lb-back").addEventListener("click", function(){
    this.classList.remove("show");
});
//Function to zoom the clicked image.
function zoomImg() {
	//Clone the image node and append it to the zoom div.
	var clone = this.cloneNode();
	clone.classList.remove("zoom");
	var lb = document.getElementById("lb-img");
	lb.innerHTML = "";
	lb.appendChild(clone);
	//Show the zoom div.
	lb = document.getElementById("lb-back");
	lb.classList.add("show");
}