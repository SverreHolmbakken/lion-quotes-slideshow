// variables
const slider = document.querySelector(".slider");
const buttonRIght = document.querySelector(".button-right");
const buttonLeft = document.querySelector(".button-left");
const slides = document.querySelectorAll(".slide");
const slideDot = document.querySelectorAll(".slide-dot");
const numberOfSlides = slides.length;
let slideNumber = 0;

// event listeners
// change to next image
buttonRIght.addEventListener("click", () => {
	slides.forEach((slide) => {
	  slide.classList.remove("active");
	});
	slideDot.forEach((slideDot) => {
	  slideDot.classList.remove("active");
	});

	slideNumber++;

	if(slideNumber > (numberOfSlides - 1)){
	  slideNumber = 0;
	}

	slides[slideNumber].classList.add("active");
	slideDot[slideNumber].classList.add("active");
 });

  // change to previous image
  buttonLeft.addEventListener("click", () => {
	slides.forEach((slide) => {
	  slide.classList.remove("active");
	});
	slideDot.forEach((slideDot) => {
	  slideDot.classList.remove("active");
	});

	slideNumber--;

	if(slideNumber < 0){
	  slideNumber = numberOfSlides - 1;
	}

	slides[slideNumber].classList.add("active");
	slideDot[slideNumber].classList.add("active");
 });