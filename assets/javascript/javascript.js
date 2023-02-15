const img1 = document.getElementById('img1');
const audio = new Audio('./assets/sound/meow.mp3');

img1.addEventListener('mouseover', function() {
  audio.play();
});

img1.addEventListener('mouseout', function() {
  audio.pause();
});

//this adds a meow when the user mouses over the picture of my kitty cat//