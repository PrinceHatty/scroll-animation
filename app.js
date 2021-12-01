const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

// Secound section
const endsection = document.querySelector("section");
const endheading = document.querySelector("h1");

const controller = new ScrollMagic.Controller();

const screen = new ScrollMagic.Scene({
  duration: 86400,
  triggerElemnt: intro,
  triggerHook: 0
})
  .addIndicators()
  .addTo(controller);
