let altura = Number(prompt("Informe sua altura"));
let peso = Number(prompt("Informe sua massa"));
let imc = (peso / (altura**2));

if(imc < 18.5 ){
    console.log("Abaixo do peso Normal")
} else if(imc >= 18.5 && imc <= 24.9){
    console.log(`Seu imc é ${imc.toFixed(2)} e é considerado peso Normal`)
} else if(imc >= 24.9 && imc <= 34.9){
    console.log('Obesidade Classe 1')
} else if(imc >= 34.9 && imc <= 39.9){
    console.log('Obesidade Class 2')
} else if(imc >= 40){
    console.log('Obesidade classe 3')
}else{
    console.log('Dados invalidos')
}
