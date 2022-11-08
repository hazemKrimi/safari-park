import getMorphAnimations from '../utils/getMorphAnimations.mjs';

export default async () => {
  const animations = await getMorphAnimations('./assets/morphed-animals/lion.svg', '#lion');

  const timeline = anime.timeline({
    easing: 'easeInOutSine',
    duration: 3500,
    autoplay: false,
    direction: 'alternate',
    loop: true
  });

  timeline.add(
    {
      targets: '#lion',
      scale: [0, 1.1],
      opacity: [0, 1]
    },
    0
  );

  animations.forEach(animation => {
    timeline.add(animation, 0);
  });

  return timeline;
};
