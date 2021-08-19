boton = document.getElementById("volverArriba");

// Cuando el usuario hace scroll más allá de los 1000px, el botón aparece
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    boton.style.display = "block";
  } else {
    boton.style.display = "none";
  }
}

// Cuando el usuario presiona el botón, sube hasta el logo del sitio
function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
}