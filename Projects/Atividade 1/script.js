function testNumbers(){
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    var soma = n1 + n2;

    if (n1 && n2){
        if (n1 == n2){
            if (soma >= 10 && soma >= 20){
                document.getElementById("text").innerText = ("O número " + n1 + " é igual a " + n2 + ". A soma desses números, no caso " + soma +", é maior que 10 e maior que 20.");
            }else if (soma >= 10 && soma < 20){
                document.getElementById("text").innerText = ("O número " + n1 + " é igual a " + n2 + ". A soma desses números, no caso " + soma +", é maior que 10 e menor que 20.");
            }else {
                document.getElementById("text").innerText = ("O número " + n1 + " é igual a " + n2 + ". A soma desses números, no caso " + soma +", é menor que 10 e menor que 20.");
            }
        }else{
            if (soma >= 10 && soma >= 20){
                document.getElementById("text").innerText = ("O número " + n1 + " não é igual a " + n2 + ". A soma desses números, no caso " + soma +", é maior que 10 e maior que 20.");
            }else if (soma >= 10 && soma < 20){
                document.getElementById("text").innerText = ("O número " + n1 + " não é igual a " + n2 + ". A soma desses números, no caso " + soma +", é maior que 10 e menor que 20.");
            }else {
                document.getElementById("text").innerText = ("O número " + n1 + " não é igual a " + n2 + ". A soma desses números, no caso " + soma +", é menor que 10 e menor que 20.");
            }
        }
    }else{
        document.getElementById("text").innerText = ("Erro - Valores inválidos. Por favor tente novamente.");
    }
}