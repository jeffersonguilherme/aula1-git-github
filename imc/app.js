function calculaIMC(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let funcIMC = peso /(altura**2);
    console.log(funcIMC.toFixed(2));
    document.getElementById("resultadoJS").innerHTML = funcIMC.toFixed(1);
    if(funcIMC < 18.5){
        document.getElementById("nivel").innerHTML = "Abaixo do peso normal"
    }else if(funcIMC >= 18.5 && funcIMC <= 24.9){
        document.getElementById("nivel").innerHTML = "Seu peso está normal"
    }else if(funcIMC >= 25 && funcIMC <= 29.9){
        document.getElementById("nivel").innerHTML = "Excesso de peso"
    }else if(funcIMC >= 30 && funcIMC <= 34.9){
        document.getElementById("nivel").innerHTML = "Obesidade classe I"
    }else if(funcIMC >= 35 && funcIMC <= 39.9){
        document.getElementById("nivel").innerHTML = "Obesidade classe II"
    }else if(funcIMC >= 40){
        document.getElementById("nivel").innerHTML = "Obesidade classe III"
    }else{
        ocument.getElementById("resultadoJS").innerHTML = "Dados Invalido"
    }
}