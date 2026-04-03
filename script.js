/* ================= JS (script.js) ================= */

// menu mobile

document.getElementById("menuToggle").addEventListener("click", function(){
  document.querySelector("nav ul").classList.toggle("active");
});

document.addEventListener("click", function(e) {
  const menu = document.querySelector("nav ul");
  const toggle = document.getElementById("menuToggle");

  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove("active");
  }
});
// animação scroll

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);

const track = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

function updateCarousel() {
  if (!track) return;
  const width = track.clientWidth;
  track.style.transform = `translateX(-${index * width}px)`;
}

setInterval(() => {
  const total = track.children.length;
  index = (index + 1) % total;
  updateCarousel();
}, 4000); // troca a cada 4 segundos

window.addEventListener("resize", updateCarousel);

// animação inicial
reveal();