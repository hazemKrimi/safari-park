export default async (filePath, vectorId) => {
  const response = await fetch(filePath);
  const animal = await response.text();

  document.querySelector(vectorId).innerHTML = animal;
  document.querySelector(vectorId).style.visibility = 'visible';

  return document.querySelector(vectorId);
};
