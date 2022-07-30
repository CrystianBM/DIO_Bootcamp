//tipos de variaveis


// boolean (verdadeiro ou falso)

var vOUf = false;
console.log(typeof(vOUf));
console.log(vOUf);
console.log("-----------------------------");


// number

var num1 = 1;
console.log(typeof(num1));
console.log(num1);
console.log("-----------------------------");


// string

var strQualquer = "Alguma coisa";
console.log(typeof(strQualquer));
console.log(strQualquer);
console.log("-----------------------------");


// function

var myFunction = function(){
    console.log("Minha função que fez isso");
}
console.log(typeof(myFunction));
myFunction();
console.log("-----------------------------");


// ----------------------


// Declarações de variável

// var -> variavel para ser usada e modificada de forma local e global

function EX1(){
    var ex1 = 123;
    console.log("Valor de ex1 dentro da função = " + ex1);
}

EX1();
ex1 = 456;
console.log("Valor de ex1 fora da função = " + ex1);
console.log("-----------------------------");


// let -> variavel para uso local, pode ser modificada.

function EX2(){
    let ex2 = 111;
    console.log("Valor de ex2 dentro da função = " + ex2);
}

EX2();
console.log("Rodar o comando console.log(ex2) retornará o erro dizendo que a variavel ex2 não foi definida, ou seja, a variavel só pode ser utilizada dentro da função local.");
console.log("-----------------------------");

// const -> variavel somente para leitura, uma vez definida seu valor não muda, e só pode ser usada localmente.

function EX3(){
    const ex3 = 333;
    console.log("Valor de ex3 dentro da função = " + ex3);
    console.log("Ao tentar mudar o valor dessa variavel é retornado um erro dizendo que não é possivel modificar o valor de uma variavel constante.");
}

EX3();
console.log("Também ocorrerá um erro ao tentar chamar a variável fora da função pois será dada com não encontrada, sendo possível somente o uso local (dentro da função).")
console.log("-----------------------------");



// atribuição, comparação e comparação identica


//atribuição -> '=' atribui um valor
var atribuiçãoEx = 1;
console.log(atribuiçãoEx);
console.log("-----------------------------");

//comparação -> '==' compara apenas os valores
var compEx = "1" == 1;
console.log(compEx);
console.log("-----------------------------");

//comparação identica -> '===' compara tanto o valor como o tipo do mesmo (number, string, boolean, etc.)
var compIdenticaEx = "1" === 1;
console.log(compIdenticaEx);
console.log("-----------------------------");


