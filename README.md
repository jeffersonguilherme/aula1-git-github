# aula1-git-github
Este repositório é para fins de estudos do módulo git e github. 

- Criar pasta:

mkdir nome-da-pasta

- para acessar a psta:

cd nome-da-pasta

- lista o que tem dentro da pasta 

ls 


-sair da pasta

cd ..

-iniciarndo o git 

git init

-como criar um arquivo na pasta

echo "# aula1" >> nome-do-arquivo.extensão

- para adicionar arquivos e pasta

- Para adicionar conteúdo (Arquivos)

git add nome-do-arquivo-pasta

- Para adicionar todos os aquivos/pastas

git add .

-Para refazer um add expercífico

git reset nome-do-arquivo

-Para refazer um add geral

 

- Para registrar o comentário (commit)

git commit -m "Comentário aqui"

git reset [arquivo]

-Retorna ao último commit, mantendo as alterações feitas nos arquivos

git reset --soft HEAD~1

Retona ao último commit, removendo as alterações feitas nos arquivos

git reset --hard HEAD~1
