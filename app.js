const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

// Secound section
const endsection = document.querySelector("section");
const endheading = document.querySelector("h1");

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration: 59000,
  triggerElemnt: intro,
  triggerHook: 0
})
  // .addIndicators()
  .setPin(intro)
  .addTo(controller);

const textAnim = TweenMax.fromTo(text,3,{ opacity :1 }, { opacity:0 })

const scene2 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElemnt: intro,
  triggerHook: 0
})
.setTween(textAnim)
.addTo(controller)



let accelamount = 0.2;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 500;
})
setInterval(() => {
    delay +=(scrollpos - delay)*accelamount;
    console.log(scrollpos,delay)

    video.currentTime = scrollpos
},33.3)
