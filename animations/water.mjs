import fetchVector from '../utils/fetchVector.mjs';
import animateWhale from './whale.mjs';
import animateSquid from './squid.mjs';

export default async () => {
  const whale = await fetchVector('./assets/animals/whale.svg', '#whale');

  await new Promise(resolve => setTimeout(() => resolve(), 1000));

  const whaleTimeline = await animateWhale();

  whaleTimeline.play();

  await Promise.all(whale.getAnimations().map(animation => animation.finished));

  const squid = await fetchVector('./assets/animals/squid.svg', '#squid');

  await new Promise(resolve => setTimeout(() => resolve(), 1000));

  const squidTimeline = await animateSquid();

  squidTimeline.play();

  await Promise.all(squid.getAnimations().map(animation => animation.finished));

  window.addEventListener('unload', () => {
    document.removeChild(document.querySelector('#whale'));
    document.removeChild(document.querySelector('#squid'));
  });
};
