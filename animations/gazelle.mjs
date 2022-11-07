import getMorphAnimations from '../utils/getMorphAnimations.mjs';

const moveGazelle = async () => {
  const animations = await getMorphAnimations('./assets/morphed-animals/gazelle.svg', '#gazelle');

  const timeline = anime.timeline({
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true,
    duration: 3000
  });

  timeline.add({
    targets: '#gazelle svg',
    translateX: 500
  });

  animations.forEach(animation => {
    timeline.add(animation, 0);
  });
};

export default moveGazelle;
