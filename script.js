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
