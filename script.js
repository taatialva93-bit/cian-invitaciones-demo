window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 600);
  }, 1500);
});

function abrirInvitacion() {
  document.querySelector(".portada").style.display = "none";
  document.getElementById("invitacion").style.display = "block";

  lanzarConfeti();

  window.scrollTo(0, 0);
}
function musica() {
  const audio = document.getElementById("audio");

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

const fechaEvento = new Date("2026-08-15T17:00:00");

function actualizarContador() {
  const ahora = new Date();
  const diferencia = fechaEvento - ahora;

  if (diferencia <= 0) {
    document.getElementById("countdown").innerHTML = "¡Llegó el gran día! ✨";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `${dias} días · ${horas} hs · ${minutos} min · ${segundos} seg`;
}

actualizarContador();
setInterval(actualizarContador, 1000);

const elementosAnimados = document.querySelectorAll(".animar");

function mostrarAnimaciones() {
  elementosAnimados.forEach((elemento) => {
    const posicion = elemento.getBoundingClientRect().top;
    const altoPantalla = window.innerHeight;

    if (posicion < altoPantalla - 100) {
      elemento.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", mostrarAnimaciones);
mostrarAnimaciones();
function lanzarConfeti() {

  for (let i = 0; i < 80; i++) {

    const confeti = document.createElement("div");

    confeti.innerHTML = ["✨","🦄","🌈","💖","⭐"][Math.floor(Math.random()*5)];

    confeti.style.position = "fixed";
    confeti.style.left = Math.random() * 100 + "%";
    confeti.style.top = "-50px";

    confeti.style.fontSize =
      (Math.random() * 20 + 20) + "px";

    confeti.style.zIndex = "9999";
    confeti.style.pointerEvents = "none";

    document.body.appendChild(confeti);

    let posicion = -50;

    const velocidad =
      Math.random() * 4 + 2;

    const intervalo = setInterval(() => {

      posicion += velocidad;

      confeti.style.top = posicion + "px";

      confeti.style.transform =
        `rotate(${posicion * 3}deg)`;

      if (posicion > window.innerHeight + 100) {
        clearInterval(intervalo);
        confeti.remove();
      }

    }, 20);

  }

}