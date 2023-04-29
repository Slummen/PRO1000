const image = document.querySelector('.guliphone');
image.addEventListener('mouseover', () => {
  image.style.transform = 'scale(1.2)';
  image.style.transition = 'transform 0.5s ease';
});
image.addEventListener('mouseout', () => {
  image.style.transform = 'scale(1)';
  image.style.transition = 'transform 0.5s ease';
});