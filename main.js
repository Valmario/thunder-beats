function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === 'audio') {
    elemento.currentTime = 0;
    elemento.play();
  } else {
    console.log('Elemento não encontrado ou seletor inválido');
  }
}

document.addEventListener('keydown', function (event) {
  const teclaPressionada = event.key;

  if (teclaPressionada >= '1' && teclaPressionada <= '9') {
    const teclaAudio = document.querySelector(
      `.tecla[data-tecla="${teclaPressionada}"]`
    );

    if (teclaAudio) {
      const instrumento = teclaAudio.classList[1];
      const idAudio = `#som_${instrumento}`;
      tocaSom(idAudio);
      teclaAudio.classList.add('ativa');
    }
  }
});

document.addEventListener('keyup', function (event) {
  const teclaPressionada = event.key;

  if (teclaPressionada >= '1' && teclaPressionada <= '9') {
    const teclaAudio = document.querySelector(
      `.tecla[data-tecla="${teclaPressionada}"]`
    );

    if (teclaAudio) {
      teclaAudio.classList.remove('ativa');
    }
  }
});

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };
}
