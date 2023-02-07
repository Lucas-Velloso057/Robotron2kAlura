const controle = document.querySelectorAll("[data-controle]")

const estatisticas = document.querySelectorAll("[data-estatistica]");

const pecas = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },

  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
}

controle.forEach(function(elemento){
  elemento.addEventListener("click", function(evento){

    const peca = evento.target.parentNode.querySelector("[data-contador]");


    if(evento.target.dataset.controle == "+"){    
      botaEstatisticas(evento.target.dataset.peca);
    }
    else{
      if( peca.value != 0 ){
      tiraEstatisticas(evento.target.dataset.peca);
          }
        }
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
      })
})

function manipulaDados(operacao, parente){
  const peca = parente.querySelector("[data-contador]");

  if(operacao == "+"){
    peca.value = parseInt(peca.value) + 1;
  }else{
    if(peca.value >= 1){
      peca.value = parseInt(peca.value) - 1;
    }
}
}

function botaEstatisticas(peca){
  estatisticas.forEach(function(elemento) {
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
  });
}

function tiraEstatisticas(peca){
  estatisticas.forEach(function(elemento) {
    elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
  });
}