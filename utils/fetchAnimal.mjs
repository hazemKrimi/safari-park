export default async (filePath, vectorId) => {
  const response = await fetch(filePath);
  const animal = await response.text();

  document.querySelector(vectorId).innerHTML = animal;
};
