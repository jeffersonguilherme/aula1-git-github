# aula1-git-github
Este repositório é para fins de estudos do módulo git e github. 

- para criar pasta:

mkdir nome-da-pasta

- para acessar pasta:

cd nome-da-pasta

- para sair de uma pasta

cd ..

- para iniciar repositório 

git init

- listar arquivos e pastas

ls

- para criar arquivos 

touch nome-do-arquivo.extensão ou pasta

- para adicionar conteúdo(arquivo/pasta)

git add nome-do-arquivo-pasta

- para adicionar todos os arquivos/pastas

git add .

- para desfazer um add específico

git reset nome-do-arquivo

- para desfazer um add geral(add .)

git reset

- para registrar o comentário (commit)

git commit -m "comentário aqui"

- Para retornar ao último commit, mantendo as alterações feitas nos arquivos

git reset --soft HEAD~1

- Para retornar ao último commit, removendo as alterações feitas nos arquivos

git reset --hard HEAD~1
