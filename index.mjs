import fetchAnimal from './utils/fetchAnimal.mjs';
import runAnimations from './animations/run.mjs';

(async () => {
  await fetchAnimal('./assets/animals/gazelle.svg', '#gazelle');
  await runAnimations();
})();
