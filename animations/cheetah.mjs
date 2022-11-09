import getMorphAnimations from '../utils/getMorphAnimations.mjs';

export default async () => {
  const animations = await getMorphAnimations('./assets/morphed-animals/cheetah.svg', '#cheetah');

  const timeline = anime.timeline({
    easing: 'linear',
    duration: 5000,
    autoplay: false
  });

  timeline.add(
    {
      targets: '#cheetah',
      translateX: -500,
      opacity: [0, 1]
    },
    0
  );

  animations.forEach(animation => {
    timeline.add(animation, 0);
  });

  return timeline;
};
