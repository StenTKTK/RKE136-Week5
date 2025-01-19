// JavaScript for Image Carousel

// Get the carousel buttons and images
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = document.querySelectorAll('.carousel-img');
let currentIndex = 0;

// Show the image based on the current index
function updateCarousel() {
  // Hide all images
  images.forEach((img, index) => {
    img.style.display = 'none';
  });

  // Show the current image
  images[currentIndex].style.display = 'block';
}

// Navigate to the next image
nextBtn.addEventListener('click', function() {
  // Move to the next image
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

// Navigate to the previous image
prevBtn.addEventListener('click', function() {
  // Move to the previous image
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

// Initial display
updateCarousel();
