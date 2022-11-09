import getMorphAnimations from '../utils/getMorphAnimations.mjs';

export default async () => {
  const animations = await getMorphAnimations(
    './assets/morphed-animals/crocodile.svg',
    '#crocodile'
  );

  const timeline = anime.timeline({
    easing: 'linear',
    duration: 5000,
    autoplay: false
  });

  timeline.add(
    {
      targets: '#crocodile',
      translateX: 200,
      opacity: [0, 1]
    },
    0
  );

  animations.forEach(animation => {
    timeline.add(animation, 0);
  });

  return timeline;
};
