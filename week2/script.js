const displayedImg = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imageList = [
  { src: 'images/pic1.jpg', alt: 'Image 1' },
  { src: 'images/pic2.jpg', alt: 'Image 2' },
  { src: 'images/pic3.jpg', alt: 'Image 3' },
  { src: 'images/pic4.jpg', alt: 'Image 4' },
  { src: 'images/pic5.jpg', alt: 'Image 5' }
];

// Create thumbnails
imageList.forEach(image => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', image.src);
  newImage.setAttribute('alt', image.alt);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', () => {
    displayedImg.src = image.src;
    displayedImg.alt = image.alt;
  });
});

// Button toggles overlay
btn.addEventListener('click', () => {
  if (btn.textContent === 'Darken') {
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    btn.textContent = 'Lighten';
  } else {
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    btn.textContent = 'Darken';
  }
});