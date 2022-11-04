import moveGazelle from './animations/gazelle/index.mjs';

(async () => {
  const response = await fetch('./assets/gazelle.svg');
  const gazelle = await response.text();

  document.querySelector('#gazelle').innerHTML = gazelle;
  moveGazelle();
})();
