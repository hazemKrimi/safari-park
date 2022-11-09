import fetchVector from '../utils/fetchVector.mjs';
import animateCrocodile from './crocodile.mjs';
import animateElephant from './elephant.mjs';

export default async () => {
  const crocodile = await fetchVector('./assets/animals/crocodile.svg', '#crocodile');

  await new Promise(resolve => setTimeout(() => resolve(), 1000));

  const crocodileTimeline = await animateCrocodile();

  crocodileTimeline.play();

  await Promise.all(crocodile.getAnimations().map(animation => animation.finished));

  const elephant = await fetchVector('./assets/animals/elephant.svg', '#elephant');

  await new Promise(resolve => setTimeout(() => resolve(), 1000));

  const elephantTimeline = await animateElephant();

  elephantTimeline.play();

  await Promise.all(elephant.getAnimations().map(animation => animation.finished));

  window.addEventListener('unload', () => {
    document.removeChild(document.querySelector('#crocodile'));
    document.removeChild(document.querySelector('#elephant'));
  });
};
