import runEntranceAnimations from './animations/entrance.mjs';
import runLandAnimations from './animations/land.mjs';
import runWaterAnimations from './animations/water.mjs';

let entranceAnimationsRan = false;
let landAnimationsRan = false;
let waterAnimationsRan = false;

const animationPerSlide = {
  0: entranceAnimationsRan,
  1: landAnimationsRan,
  2: waterAnimationsRan
};

const runAnimationsDependingOnSlide = async slide => {
  switch (slide) {
    case 0: {
      if (entranceAnimationsRan) return;
      entranceAnimationsRan = true;
      await runEntranceAnimations();
      return;
    }

    case 1: {
      if (landAnimationsRan) return;
      landAnimationsRan = true;
      await runLandAnimations();
      return;
    }

    case 2: {
      if (waterAnimationsRan) return;
      waterAnimationsRan = true;
      await runWaterAnimations();
      return;
    }
  }
};

window.addEventListener('load', async () => {
  let index = document.getElementsByClassName('slide');
  let length = index.length;
  let slide = 0;

  entranceAnimationsRan = true;
  await runEntranceAnimations();

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
    if (animationPerSlide[slide]) return;
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
    if (animationPerSlide[slide]) return;
    await runAnimationsDependingOnSlide(slide);
  });
});
