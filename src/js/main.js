var slideCounter = 0;
// tracks the slide
let nextSlide = function(){
	var oldImage = document.querySelector(".slide.active");
	oldImage.classList.remove('active');
	
	slideCounter++;
	// console.log(slideCounter)
	// goes up by one
	
	// return back to the first slide
	// after the 4th slide, return back to the first slide
	// after the last slide, return back to the first slide
	// after the (length-1) slide, return back to the slide at index 0
	// if we go past the (length-1) slide, return back to the slide at index 0
	// if slideCounter goes past (length-1) slide, return back to the slide at index 0
	
	var allSlides = document.querySelectorAll(".slide");
	if (slideCounter >= allSlides.length) {
		slideCounter = 0;
	}
	allSlides[slideCounter].classList.add('active');
}

let previousSlide = function() {
	var oldImage = document.querySelector(".slide.active");
	oldImage.classList.remove('active');
	
	slideCounter--;

	var allSlides = document.querySelectorAll(".slide");
	if (slideCounter <= 0) {
		slideCounter = allSlides.length-1;
	}

	
	allSlides[slideCounter].classList.add('active');

	// if we go before the first slide, go to the last slide
	// if we go down past 0 slide, return back to the slide at (length-1)
}

// var timer = setInterval(nextSlide, 6000);



var nextButton = document.querySelector(".next");
nextButton.addEventListener('click', nextSlide)

var previousButton = document.querySelector(".previous");
previousButton.addEventListener('click', previousSlide)






// displaying images in a slideshow
// every 5 seconds a new image appears 
// every 5 seconds the next image appears and the old image disappears
// every 5 seconds the old image disappears and the next image appears 
// every 5 seconds the old image disappears, we update the counter, and the next image appears 



// setTimeout allows to run a function once after the interval of time.
// setInterval allows to run a function regularly with the interval between the runs

// find the element, queryselector **
// classlist.add
// classlist.remove
// ++ go up by one
