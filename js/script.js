const slides = document.getElementsByClassName('slideshow__figure')

const leftArrow = document.getElementById('button-left')
const rightArrow = document.getElementById('button-right')

const dots = document.getElementsByClassName('slideshow__dot')


//event listeners;
dots.addEventListener('click', );
leftArrow.addEventListener('click', handlePreviousSlide);


let slideIndex = 1;

function handlePreviousSlide() {
	if (number > slides.length) {slideIndex = 1};
	if (number < 1) {slideIndex = slides.length};
	for (index = 0; index < slides.length; index += 1) {
		slides[index].className = slides[index].className.replace('.slideshow__figure--visible', '.slideshow__figure')
	};
	for (index = 0; index < dots.length; index += 1) {
		dots[index].className = dots[index].className.replace(' active', '')
	};
;}

