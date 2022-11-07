export default async (filePath, originalVectorId) => {
  const response = await fetch(filePath);
  const morphedVector = await response.text();

  const morphedVectorWrapper = document.createElement('div');

  morphedVectorWrapper.setAttribute('id', 'morphedVector');
  morphedVectorWrapper.innerHTML = morphedVector;

  Array.from(morphedVectorWrapper.querySelectorAll('svg path')).forEach((path, index) =>
    path.setAttribute('id', `animatable-${index}`)
  );

  Array.from(document.querySelectorAll(`${originalVectorId} svg path`)).forEach((path, index) =>
    path.setAttribute('id', `animatable-${index}`)
  );

  const animations = Array.from(document.querySelectorAll(`${originalVectorId} svg path`)).map(
    (path, index) => {
      const currentPath = path.getAttribute('d');
      const morphedPath = morphedVectorWrapper
        .querySelector(`#animatable-${index}`)
        .getAttribute('d');

      return {
        targets: `#animatable-${index}`,
        d: [
          {
            value: currentPath
          },
          {
            value: morphedPath
          }
        ]
      };
    }
  );

  return animations;
};
