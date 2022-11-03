gsap.registerPlugin(MotionPathPlugin);

let windowWidth = window.innerWidth;

const movingGazelle = gsap.to('#gazelle', {
  ease: 'power1.inOut',
  duration: 3,
  motionPath: {
    path: `M 0 0 L ${windowWidth - 50} 0`
  },
  repeat: -1,
  repeatDelay: 1,
  transformOrigin: '0% 0%',
  yoyo: true
});

document.addEventListener('resize', () => {
  windowWidth = window.innerWidth;
  movingGazelle.restart();
});
