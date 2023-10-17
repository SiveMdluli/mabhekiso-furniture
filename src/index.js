import './style.css';
import './modules/cart.js';
import { initNavbar } from './modules/navbar.js';
import { initSearch } from './modules/search.js';
import { addClickedClass, removeClickedClass } from './modules/adv-cards.js';

// Calling functions from ad-cards
addClickedClass();
removeClickedClass();

document.addEventListener('DOMContentLoaded', function () {
  const image = document.querySelector('img');
  const overlay = document.querySelector('.gradient-overlay');

  // Get the average color of the image
  getAverageColor(image).then((color) => {
    overlay.style.backgroundColor = color;
  });
});

async function getAverageColor(image) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = image.width;
  canvas.height = image.height;

  ctx.drawImage(image, 0, 0, image.width, image.height);

  const imageData = ctx.getImageData(0, 0, image.width, image.height).data;

  let totalRed = 0;
  let totalGreen = 0;
  let totalBlue = 0;
  let pixelCount = 0;

  for (let i = 0; i < imageData.length; i += 4) {
    totalRed += imageData[i];
    totalGreen += imageData[i + 1];
    totalBlue += imageData[i + 2];
    pixelCount++;
  }

  const averageRed = Math.round(totalRed / pixelCount);
  const averageGreen = Math.round(totalGreen / pixelCount);
  const averageBlue = Math.round(totalBlue / pixelCount);

  return `rgb(${averageRed}, ${averageGreen}, ${averageBlue})`;
}
