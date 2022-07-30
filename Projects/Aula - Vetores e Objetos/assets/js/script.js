//declarando array

let array = ["string", 1, true];
console.log(array);
console.log("----------------");



//diversos tipos de dados e arrays dentro de arrays

let array2 = ["string", 1, true, [324], array, [true, "another string"]];
console.log(array2);
console.log("----------------");



//chamando valores dentro de um array

console.log(array2[0]);
console.log(array2[4][2]); //nesse caso, chamamos um valor de um array dentro de outro array
console.log("----------------");



/* Manipulando Arrays */

//forEach -> repete uma serie de comandos para cada item dentro de um array

array.forEach(function(item, index) {console.log(item, index)});
console.log("----------------");



// push -> add um item ao fim do array

array.push("mais um item");
console.log(array);
console.log("----------------");



// pop -> remove o ultimo item de um array
array.pop();
console.log(array);
console.log("----------------");



// shift -> remove o primeiro item de um array
array.shift();
console.log(array);
console.log("----------------");



// unshift -> adiciona um novo item no inicio de um array
array.unshift("voltei");
console.log(array);
console.log("----------------");



// indexOf -> retorna a posição do valor citado dentro do array
console.log(array.indexOf(true));
console.log("----------------");



// splice -> substitui/remove uma parte de um array
array2.splice(0, 3);
console.log(array2);
console.log("----------------");



// slice -> retorna um pedaço de um array
let array3 = array2.slice(0, 2);
console.log(array3);
console.log("----------------");







/* Criando e manipulando objetos */

let obj1 = {
    string: "string",
    color: "azul",
    number: 5,
    boolean: true,
    objArray: array,
    simpleObj: {
        nome: "simpleObj",
        boolean: false,
    }
}

console.log(obj1);
console.log("----------------");
console.log(obj1.objArray); //chamando uma propriedade do objeto com ponto final ( . )
console.log("----------------");
console.log(obj1.simpleObj.nome);
console.log("----------------");

let corObj = obj1.color;
console.log(corObj);
console.log("----------------");

let objArr = obj1.objArray[2];
console.log(objArr);
console.log("----------------");



