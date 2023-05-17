const images = ['min.png', 'min.jpg'];
let currentImageIndex = 0;

function changeBackgroundImage() {
  const backgroundElement = document.querySelector('.img-s1');
  backgroundElement.style.backgroundImage = `url('${images[currentImageIndex]}')`;
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Запуск слайд-шоу при загрузке страницы
window.onload = function() {
  changeBackgroundImage();
  setInterval(changeBackgroundImage, 5000); // Изменение изображения каждые 5 секунд (5000 миллисекунд)
};
