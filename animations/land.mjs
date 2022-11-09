import fetchVector from '../utils/fetchVector.mjs';
import animateLion from './lion.mjs';
import animateGazelle from './gazelle.mjs';
import animateCheetah from './cheetah.mjs';

export default async () => {
  const lion = await fetchVector('./assets/animals/lion.svg', '#lion');

  await new Promise(resolve => setTimeout(() => resolve(), 500));

  const lionTimeline = await animateLion();

  lionTimeline.play();

  await Promise.all(lion.getAnimations().map(animation => animation.finished));

  const gazelle = await fetchVector('./assets/animals/gazelle.svg', '#gazelle');

  await new Promise(resolve => setTimeout(() => resolve(), 1000));

  const gazelleTimeline = await animateGazelle();

  gazelleTimeline.play();

  await Promise.all(gazelle.getAnimations().map(animation => animation.finished));

  const cheetah = await fetchVector('./assets/animals/cheetah.svg', '#cheetah');

  await new Promise(resolve => setTimeout(() => resolve(), 1000));

  const cheetahTimeline = await animateCheetah();

  cheetahTimeline.play();

  window.addEventListener('unload', () => {
    document.removeChild(document.querySelector('#lion'));
    document.removeChild(document.querySelector('#gazelle'));
    document.removeChild(document.querySelector('#cheetah'));
  });

  return [lionTimeline, gazelleTimeline, cheetahTimeline];
};
