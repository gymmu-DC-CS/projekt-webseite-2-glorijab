document.addEventListener("DOMContentLoaded", () => {



const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;
let interval;


slides.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.setAttribute("aria-label", + (i + 1));
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    index = i;
    updateSlides();
    resetAutoplay();
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");


function updateSlides() {
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}


nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateSlides();
  resetAutoplay();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlides();
  resetAutoplay();
});


function startAutoplay() {
  interval = setInterval(() => {
    index = (index + 1) % slides.length;
    updateSlides();
  }, 3000);
}

function resetAutoplay() {
  clearInterval(interval);
  startAutoplay();
}

startAutoplay();

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    index = (index + 1) % slides.length;
    updateSlides();
    resetAutoplay();
  }

  if (e.key === "ArrowLeft") {
    index = (index - 1 + slides.length) % slides.length;
    updateSlides();
    resetAutoplay();
  }
});

nextBtn.focus();

});





function animateValue(id, end, duration) {
  let element = document.getElementById(id);
  if (!element) return;

  let start = 0;
  let increment = end / (duration / 16);

  let timer = setInterval(() => {
    start += increment;
    if (start >= end) {
      element.textContent = end;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 16);
}

document.addEventListener("DOMContentLoaded", () => {
  animateValue("points", 28, 800);
  animateValue("assists", 6, 800);
  animateValue("threes", 5, 800);
});




