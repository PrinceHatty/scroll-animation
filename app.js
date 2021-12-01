const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

// Secound section
const endsection = document.querySelector("section");
const endheading = document.querySelector("h1");

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration: 52000,
  triggerElemnt: intro,
  triggerHook: 0
})
  .addIndicators()
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



let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
})
setInterval(() => {
    delay +=(scrollpos - delay)*accelamount;
    console.log(scrollpos,delay)

    video.currentTime = scrollpos
},1)

video.addEventListener('loadedmetadata', function() {
  if (video.buffered.length === 0) return;

  const bufferedSeconds = video.buffered.end(0) - video.buffered.start(0);
  console.log(`${bufferedSeconds} seconds of video are ready to play.`);
});
