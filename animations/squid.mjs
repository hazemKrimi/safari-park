import getMorphAnimations from '../utils/getMorphAnimations.mjs';

export default async () => {
  const animations = await getMorphAnimations('./assets/morphed-animals/squid.svg', '#squid');

  const timeline = anime.timeline({
    easing: 'linear',
    duration: 5000,
    autoplay: false
  });

  timeline.add(
    {
      targets: '#squid',
      translateY: -100,
      opacity: [0, 1]
    },
    0
  );

  animations.forEach(animation => {
    timeline.add(animation, 0);
  });

  return timeline;
};
