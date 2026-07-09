function abrirInvitacion(){
  const portada = document.getElementById("portada");
  const invitacion = document.getElementById("invitacion");

  portada.style.display = "none";
  invitacion.style.display = "block";
  window.scrollTo(0, 0);
}

const fechaEvento = new Date("2026-08-08T21:30:00");

function actualizarContador(){
  const countdown = document.getElementById("countdown");
  if(!countdown) return;

  const ahora = new Date();
  const diferencia = fechaEvento - ahora;

  if(diferencia <= 0){
    countdown.innerHTML = "¡Llegó la gran noche!";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  countdown.innerHTML = `${dias} días · ${horas} hs · ${minutos} min · ${segundos} seg`;
}

actualizarContador();
setInterval(actualizarContador, 1000);
