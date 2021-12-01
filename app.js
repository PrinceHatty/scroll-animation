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
  .setPin(intro)
  .addTo(controller);

let accelamount = 0.1;
let scrollpos= 0;
let delay = 0;

Scene.on('update', e=>{
    scrollpos = e.scrollPos;
    console.log(scrollPos)
})
