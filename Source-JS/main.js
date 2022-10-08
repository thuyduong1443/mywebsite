// Slider content
var sliderContent = document.getElementById('slider-ct');
setTimeout(() => {
	sliderContent.style.transform = "translateX(70px)";
	sliderContent.style.opacity = "1";
}, 1000);
// End Slider content

// Slideshow
var counter = 1, start = 0;
setInterval(() => {
	document.getElementById('radio' + counter).checked = true;
	counter++;
	if(counter > 3) {
		counter = 1;
	}
	setTimeout(() => {
		sliderContent.style.transform = "translateX(70px)";
		sliderContent.style.opacity = "1";
	}, 1500);
	if(start) sliderContent.style.opacity = "0";
	start = 1;
}, 9000);
// End slideshow

// Countdown
var countDownDate = new Date("Nov 20, 2022 00:00:00").getTime();
var x = setInterval(function() {

var now = new Date().getTime();
    
var distance = countDownDate - now;
    
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";
    
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = "EXPIRED";
	}
}, 1000);
// End countdown

// Client says

// End Client says
