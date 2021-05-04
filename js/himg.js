/*Scripts for the img fade on home page.*/
//Gets the element and image urls.
var img = document.getElementById("imgfade"),
	x = 0,
	imgUrl = ["../Final/img/concrete2.jpg", "../Final/img/excavation2.jpg",
				"../Final/img/floor3.jpg", "../Final/img/framing3.jpg", 
				"../Final/img/bathroom6.jpg", "../Final/img/pool2.jpg",
				"../Final/img/kitchen5.jpg", "../Final/img/kitchen4.jpg"];
//Sets the interval to transition and fade effects.
setInterval( function() {
	//Fade out old img.
	$(img).fadeOut(250, function() {img.src = imgUrl[x];});
	//Gets next img url.
	x = (x + 1 + imgUrl.length) % imgUrl.length;
	//Fade in next img.
	$(img).fadeIn(250, function() {img.src = imgUrl[x];});
}, 4000);