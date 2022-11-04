import { animations as movingRearRightFootAnimations } from './moveRearRightFoot.mjs';

const moveGazelle = () => {
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

  movingRearRightFootAnimations.forEach(animation => {
    timeline.add(animation, 0);
  });
};

export default moveGazelle;
