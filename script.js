const dataInicio = new Date("2025-10-18T00:00:00");
const contador = document.getElementById("contador");

function atualizar() {
  const agora = new Date();
  let diff = agora - dataInicio;

  if (diff < 0) return;

  const segundosTotais = Math.floor(diff / 1000);
  const minutosTotais = Math.floor(segundosTotais / 60);
  const horasTotais = Math.floor(minutosTotais / 60);
  const diasTotais = Math.floor(horasTotais / 24);

  const anos = Math.floor(diasTotais / 365);
  const meses = Math.floor((diasTotais % 365) / 30);
  const dias = (diasTotais % 365) % 30;

  const horas = horasTotais % 24;
  const minutos = minutosTotais % 60;
  const segundos = segundosTotais % 60;

  contador.innerHTML = `
    <strong>Estamos juntos há:</strong><br>
    ${anos} anos, ${meses} meses e ${dias} dias<br>
    ${horas}h ${minutos}m ${segundos}s 💕
  `;
}

setInterval(atualizar, 1000);
atualizar();

// Slideshow de fotos
const fotos = ["Foto1.jpg", "Foto2.jpg", "Foto3.jpg"];
let indice = 0;

const img = document.getElementById("foto");

setInterval(() => {
  indice = (indice + 1) % fotos.length;
  img.src = fotos[indice];
}, 3000);

function tocarMusica() {
  const musica = document.getElementById("player");
  musica.play();
}
