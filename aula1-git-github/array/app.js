let livrosLidos = ['Eu, Robô', 'Materia Escura']

let addOuN 
do{
  let addOuN = prompt('Deseja Adicionar algum livro')
   if(addOuN === "sim"){
      let novoLivro = prompt('Qual livro você quer adicionar?')
      livrosLidos.push(novoLivro)
      alert(`Você adcionou o livro ${novoLivro} a sua lista de leitura. Agora existem ${livrosLidos.length} na sua lista de leitura `)
    }else if(addOuN === "remover"){
      alert(`Qual livro você deseja remover dessa lista? ${livrosLidos.sort()}`);
      let livroRemovido = prompt(`Digite o livro que deseja remover.`)
      livrosLidos.shift(livroRemovido)
      alert(`Você removel "${livroRemovido}" agora tem "${livrosLidos.sort()}" em sua lista`)
    }
  
}while(addOuN === false)
