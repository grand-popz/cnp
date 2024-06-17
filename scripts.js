document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loading");

  const hideLoader = () => {
    loader.style.display = "none";
  };

  // Hide loader after 3 seconds
  setTimeout(hideLoader, 3000);

  // Hide loader once the page is fully loaded
  window.addEventListener("load", hideLoader);

  const slider = document.querySelector(".slider");
  const playPauseButton = document.getElementById("playPauseButton");
  let isPaused = false;
  let animationPaused = false;

  playPauseButton.addEventListener("click", () => {
    if (!isPaused) {
      slider.style.animationPlayState = "paused";
      playPauseButton.textContent = "Play";
    } else {
      if (!animationPaused) {
        slider.style.animation = "scroll 20s linear infinite";
      } else {
        slider.style.animation = "scroll-slow 40s linear infinite";
      }
      slider.style.animationPlayState = "running";
      playPauseButton.textContent = "Pause";
    }
    isPaused = !isPaused;
  });

  slider.addEventListener("mouseover", () => {
    if (!isPaused) {
      slider.style.animationPlayState = "paused";
      animationPaused = true;
    }
  });

  slider.addEventListener("mouseout", () => {
    if (!isPaused) {
      slider.style.animationPlayState = "running";
      animationPaused = false;
    }
  });
});
// Change navbar background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});
