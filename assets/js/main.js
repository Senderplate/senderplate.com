
// Initialize AlpineJS
document.addEventListener('alpine:init', () => {
  // Main
  Alpine.data('main', () => ({
    dialogs: {
      preview: false,
    },
    previewSelection: 6
  }));
});


document.addEventListener(
  'DOMContentLoaded',
  function () {

    // gsap.registerPlugin(ScrollTrigger);

    // var tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });
    // tl.from('.gsap-carousel-item-3', { y: 200, opacity: 0, duration: 1 });

    // tl.from(
    //   '.gsap-carousel-item-2',
    //   { y: 200, opacity: 0, duration: .4 },
    //   '-=.5'
    // );
    // tl.from(
    //   '.gsap-carousel-item-4',
    //   { y: 200, opacity: 0, duration: .4 },
    //   '-=1'
    // );

    // tl.from(
    //   '.gsap-carousel-item-1',
    //   { y: 200, opacity: 0, duration: .4 },
    //   '-=.5'
    // );
    // tl.from(
    //   '.gsap-carousel-item-5',
    //   { y: 200, opacity: 0, duration: .4 },
    //   '-=1'
    // );

    // tl.play();

    gsap.to('.gsap-carousel', {
      duration: 1,
      opacity: 1,
    });

    gsap.from('.gsap-carousel-item-3', {
      y: 300,
      duration: 2,
      ease: 'expo.out',
    });

    gsap.from('.gsap-carousel-item-2', {
      x: 100,
      duration: 2,
      opacity: 0,
      ease: 'expo.out',
      delay: 1,
    });
    gsap.from('.gsap-carousel-item-4', {
      x: -200,
      duration: 2,
      opacity: 0,
      ease: 'expo.out',
      delay: 1,
    });

    gsap.from('.gsap-carousel-item-1', {
      x: 100,
      duration: 2,
      opacity: 0,
      ease: 'expo.out',
      delay: 1.2,
    });
    gsap.from('.gsap-carousel-item-5', {
      x: -100,
      duration: 2,
      opacity: 0,
      ease: 'expo.out',
      delay: 1.2,
    });


    gsap.from('.gsap-preview-item', {
      scrollTrigger: {
        trigger: '.gsap-preview',
        // scrub: true,
        // end: '40',
      },
      y: 100,
      stagger: 0.05,
      opacity: 0,
      duration: .8,
    });
  },
  false
);