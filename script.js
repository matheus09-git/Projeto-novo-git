// Adiciona um evento de clique
image.addEventListener('click', () => {
  alert('Você clicou na imagem!');
});

// Evento de movimento do mouse
image.addEventListener('mousemove', (event) => {
  console.log(`Mouse em: X: ${event.clientX}, Y: ${event.clientY}`);
});


//Inicio Modal 
function modal(){
  const btnModalAbrir = document.querySelector('[data-modal="jsBtnAbrir"]');
  const btnModalAbrir2 = document.querySelector('[data-modal="jsBtnAbrir2"]');
  const btnModalAbrir3 = document.querySelector('[data-modal="jsBtnAbrir3"]');
  const btnModalFechar = document.querySelector('[data-modal="jsBtnFechar"]');
  const fecharModalOut1 = document.querySelector('[data-modal="jsModalA"]');
  const fecharModalOut2 = document.querySelector('[data-modal="jsModalB"]');
  const fecharModalOut3 = document.querySelector('[data-modal="jsModalC"]');
  const btnModalFecharB = document.querySelector('[data-modal="jsBtnFecharB"]');
  const btnModalFecharC = document.querySelector('[data-modal="jsBtnFecharC"]');
  const modalConteinerA = document.querySelector('[data-modal="jsModalA"]');
  const modalConteinerB = document.querySelector('[data-modal="jsModalB"]');
  const modalConteinerC = document.querySelector('[data-modal="jsModalC"]');
  
  
  btnModalAbrir.addEventListener('click', abrirModal)
  function abrirModal(){
    modalConteinerA.classList.add('ativo');
  }

  btnModalAbrir2.addEventListener('click', abrirModal2)
  function abrirModal2(){
    modalConteinerB.classList.add('ativo');
  }

  btnModalAbrir3.addEventListener('click', abrirModal3)
  function abrirModal3(){
    modalConteinerC.classList.add('ativo');
  }

  btnModalFechar.addEventListener('click', fecharModal1,)
  function fecharModal1(){
    modalConteinerA.classList.remove('ativo');
  }

  btnModalFecharB.addEventListener('click', fecharModal2)
  function fecharModal2(){
    modalConteinerB.classList.remove('ativo');
  }

  btnModalFecharC.addEventListener('click', fecharModal3)
  function fecharModal3(){
    modalConteinerC.classList.remove('ativo');
  }

  fecharModalOut1.addEventListener('click', btnModalFechar1)
  function btnModalFechar1(){
      modalConteinerA.classList.remove('ativo')
  }

  fecharModalOut2.addEventListener('click', btnModalFechar2)
  function btnModalFechar2(){
      modalConteinerB.classList.remove('ativo')
  }

  fecharModalOut3.addEventListener('click', btnModalFechar3)
  function btnModalFechar3(){
      modalConteinerC.classList.remove('ativo')
  }
}  
modal()

//Fim Modal

