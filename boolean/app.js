const fNumber = Number(prompt('Informe um número' ));
const operation = prompt('Informe a operação');
const sNumber = Number(prompt('Informe um segundo número' ));
console.log(operation)

if(operation === "+"){
    console.log(fNumber + sNumber)
}else if(operation === "-"){
    console.log(fNumber - sNumber)
}else if(operation === "/"){
    console.log(fNumber / sNumber)
}else if(operation === "*"){
    console.log(fNumber * sNumber)
}else{
    console.log("entrada invalida")
}
