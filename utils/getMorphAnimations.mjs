export default async (filePath, originalVectorId) => {
  const animal = originalVectorId.replace('#', '');

  const response = await fetch(filePath);
  const morphedVector = await response.text();

  let morphedVectorWrapper = document.createElement('div');

  morphedVectorWrapper.setAttribute('id', 'morphedVector');
  morphedVectorWrapper.innerHTML = morphedVector;

  Array.from(morphedVectorWrapper.querySelectorAll('svg path')).forEach((path, index) =>
    path.setAttribute('id', `animatable-${animal}-${index}`)
  );

  Array.from(document.querySelectorAll(`${originalVectorId} svg path`)).forEach((path, index) =>
    path.setAttribute('id', `animatable-${animal}-${index}`)
  );

  const animations = Array.from(document.querySelectorAll(`${originalVectorId} svg path`)).map(
    (path, index) => {
      const currentPath = path.getAttribute('d');
      const morphedPath = morphedVectorWrapper
        .querySelector(`#animatable-${animal}-${index}`)
        .getAttribute('d');

      return {
        targets: `#animatable-${animal}-${index}`,
        d: [
          {
            value: currentPath
          },
          {
            value: morphedPath
          }
        ],
        delay: anime.stagger(100)
      };
    }
  );

  morphedVectorWrapper = null;

  return animations;
};
