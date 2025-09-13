const music = document.getElementById("bg-music");
const playPauseBtn = document.getElementById("play-pause-btn");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");
const musicText = document.getElementById("music-text");
const musicPlayerBox = document.getElementById("music-player-box");

const togglePlayPause = () => {
  if (music.paused) {
    music.play();
    playIcon.classList.add("hidden");
    pauseIcon.classList.remove("hidden");
    musicText.textContent = "wave to earth - love";
    musicPlayerBox.classList.add("playing");
    musicText.classList.add("marquee");
  } else {
    music.pause();
    playIcon.classList.remove("hidden");
    pauseIcon.classList.add("hidden");
    musicText.textContent = "Play our song";
    musicPlayerBox.classList.remove("playing");
    musicText.classList.remove("marquee");
  }
};

playPauseBtn.addEventListener("click", togglePlayPause);

// Initial state setup
const setupMusic = () => {
  // Default to paused state
  let isPlaying = !music.paused;

  if (isPlaying) {
    playIcon.classList.add("hidden");
    pauseIcon.classList.remove("hidden");
    musicText.textContent = "wave to earth - love";
    musicPlayerBox.classList.add("playing");
    musicText.classList.add("marquee");
  } else {
    playIcon.classList.remove("hidden");
    pauseIcon.classList.add("hidden");
    musicText.textContent = "Play our song";
    musicPlayerBox.classList.remove("playing");
    musicText.classList.remove("marquee");
  }
};

// Try to play music and set up UI
music.play().then(() => {
  setupMusic();
}).catch((error) => {
  console.log("Autoplay was prevented by the browser.", error);
  setupMusic();
});

// Also set up on load as a fallback
window.addEventListener('load', () => {
    setTimeout(setupMusic, 100);
});

let slideIndex = 1;
showSlides(slideIndex);

// next function
function plusSlides(n) {
  showSlides((slideIndex += n));
}
// img ctrl
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("our-work-active");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("our-work-active");
}