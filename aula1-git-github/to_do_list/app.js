

function adicionar(){
  let novoElemento = document.createElement('textarea');
  let elemento = document.querySelector('div');
  elemento.appendChild(novoElemento);
}

function remover(){
  let card = document.createElement('div');
  let textoArea = document.querySelector('textarea');
  card.appendChild(textoArea);
}

