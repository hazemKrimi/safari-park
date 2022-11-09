export default async (filePath, vectorId) => {
  const response = await fetch(filePath);
  const vector = await response.text();

  document.querySelector(vectorId).innerHTML = vector;

  return document.querySelector(vectorId);
};
