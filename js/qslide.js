/*Creates the slide effect for the quotes.*/
var slides = document.querySelectorAll('#slides .slide'),
	dots = document.getElementsByClassName("dot"),
	next = document.getElementById("next"),
	prev = document.getElementById("prev"),
	currentSlide = 0,
	slideInterval = setInterval(nextSlide,8000);
goToSlide(currentSlide);

function nextSlide(){
	goToSlide(currentSlide + 1);
}

function previousSlide(){
	goToSlide(currentSlide - 1);
}
next.onclick = function(){
	nextSlide();
	//Reset the time until next slide.
	clearInterval(slideInterval);
	slideInterval = setInterval(nextSlide, 8000);
};
prev.onclick = function(){
	previousSlide();
	//Reset the time until next slide.
	clearInterval(slideInterval);
	slideInterval = setInterval(nextSlide, 8000);
};

function goToSlide(n){
	slides[currentSlide].className = 'slide';
	/*Sets the currentSlide to n, when n reaches slides
	length currentSlide resets to 0.*/
	currentSlide = (n + slides.length) % slides.length;
	slides[currentSlide].className = 'slide showing';
	//Remove 'active' from all dots.
	for (var i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	//Adds class 'active' to the current dot.
	dots[currentSlide].className += " active";
}