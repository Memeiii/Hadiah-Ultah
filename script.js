const music = document.getElementById("bg-music");
const playPauseBtn = document.getElementById("play-pause-btn");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");
const musicText = document.getElementById("music-text");
music

  .play()
  .then(() => {
    // autoplay musik
    playIcon.classList.add("hidden");
    pauseIcon.classList.remove("hidden");
    musicText.textContent = "Now Playing...";
  })
  .catch(() => {
    console.log("Autoplay was prevented. Please click to play.");
  });

playPauseBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playIcon.classList.add("hidden");
    pauseIcon.classList.remove("hidden");
    musicText.textContent = "Now Playing...";
  } else {
    music.pause();
    playIcon.classList.remove("hidden");
    pauseIcon.classList.add("hidden");
    musicText.textContent = "Play our song";
  }
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
