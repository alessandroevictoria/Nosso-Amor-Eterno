const dataInicio = new Date("2025-10-18T00:00:00");
const contador = document.getElementById("contador");

function atualizar() {
  const agora = new Date();
  const diff = agora - dataInicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  contador.innerHTML = `
    ${dias} dias,
    ${horas} horas,
    ${minutos} minutos e
    ${segundos} segundos 💕
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
