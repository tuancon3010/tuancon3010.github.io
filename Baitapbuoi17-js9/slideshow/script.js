let slideIndex = 1;
showSlide(slideIndex);

// Nút tiến lùi
function plusSlide(n) {
  showSlide((slideIndex += n));
}

function showSlide(n) {
  let slide = document.querySelectorAll(".imgSlide");
  if (n > slide.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slide.length;
  }
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slide[slideIndex - 1].style.display = "block";
}


document.querySelector(".dropdown").onclick = function () {
  document.querySelector(".dropdown-content").classList.toggle("show")
}