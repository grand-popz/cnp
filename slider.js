let currentIndex = 0;
const slides = document.querySelectorAll(".slides1 img");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  document.querySelector(".slides1").style.transform = `translateX(${offset}%)`;

  dots.forEach((dot) => dot.classList.remove("active-dot"));
  dots[currentIndex].classList.add("active-dot");
}

function moveSlide(n) {
  showSlide(currentIndex + n);
}

function currentSlide(index) {
  showSlide(index);
}

// Initialize the slider
showSlide(currentIndex);

// Auto-slide
setInterval(() => {
  moveSlide(1);
}, 6000);
