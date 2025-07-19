// For the images carousel in 'About Me' section
const images = document.querySelectorAll('.carousel-img');
  let current = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
  }

  function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  }
//Close mobile menu when any nav link is clicked
  document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("check").checked = false;
  });
});
