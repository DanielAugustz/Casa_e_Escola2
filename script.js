var n_slide = 1;
showSlides(n_slide);

function passarSlides(n) {
  showSlides((n_slide += n));
}
function showSlides(n) {
  var slide;
  var slides = document.getElementsByClassName("Slides");
  if (n > slides.length) {
    n_slide = 1;
  }
  if (n < 1) {
    n_slide = slides.length;
  }
  for (slide = 0; slide < slides.length; slide++) {
    slides[slide].style.display = "none";
  }
  slides[n_slide - 1].style.display = "block";
}

function autoShowSlides() {
  passarSlides(1);
}
setInterval(autoShowSlides, 5000);

var envair = document.getElementById("enviar");

envair.addEventListener("click", () => {
  alert("Mensagem enviada com sucesso");
  window.location.reload();
});
