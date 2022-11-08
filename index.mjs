import runLandAnimations from './animations/land.mjs';

const runAnimationsDependingOnSlide = async slide => {
  switch (slide) {
    case 0:
      return;
    case 1:
      await runLandAnimations();
    case 2:
      return;
  }
};

window.addEventListener('load', async () => {
  let index = document.getElementsByClassName('slide');
  let length = index.length;
  let slide = 0;

  for (var i = 1; i < index.length; i++) {
    index[i].style.display = 'none';
  }

  document.getElementById('slide-arrow-next').addEventListener('click', async () => {
    if (slide == length - 1) {
      index[0].style.display = 'block';
      index[slide].style.display = 'none';
      slide = 0;
    } else {
      index[slide + 1].style.display = 'block';
      index[slide].style.display = 'none';
      slide++;
    }
    await runAnimationsDependingOnSlide(slide);
  });

  document.getElementById('slide-arrow-prev').addEventListener('click', async () => {
    if (slide <= 0) {
      index[slide].style.display = 'none';
      slide = length;
      slide--;
      index[slide].style.display = 'block';
    } else {
      index[slide].style.display = 'none';
      slide--;
      index[slide].style.display = 'block';
    }
    await runAnimationsDependingOnSlide(slide);
  });
});
