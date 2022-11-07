import fetchAnimal from '../utils/fetchAnimal.mjs';
import animateLion from './lion.mjs';
import animateGazelle from './gazelle.mjs';
import animateCheetah from './cheetah.mjs';

export default async () => {
  const lion = await fetchAnimal('./assets/animals/lion.svg', '#lion');

  const lionTimeline = await animateLion();

  lionTimeline.play();

  await Promise.all(lion.getAnimations().map(animation => animation.finished));

  const gazelle = await fetchAnimal('./assets/animals/gazelle.svg', '#gazelle');

  const gazelleTimeline = await animateGazelle();

  gazelleTimeline.play();

  await Promise.all(gazelle.getAnimations().map(animation => animation.finished));

  const cheetah = await fetchAnimal('./assets/animals/cheetah.svg', '#cheetah');

  const cheetahTimeline = await animateCheetah();

  cheetahTimeline.play();

  await Promise.all(cheetah.getAnimations().map(animation => animation.finished));

  window.addEventListener('unload', () => {
    document.removeChild(document.querySelector('#lion'));
    document.removeChild(document.querySelector('#gazelle'));
    document.removeChild(document.querySelector('#cheetah'));
  });
};
