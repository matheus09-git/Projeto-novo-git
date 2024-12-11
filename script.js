/ Adiciona um evento de clique
image.addEventListener('click', () => {
  alert('Você clicou na imagem!');
});

// Evento de movimento do mouse
image.addEventListener('mousemove', (event) => {
  console.log(`Mouse em: X: ${event.clientX}, Y: ${event.clientY}`);
});

