
function calculadora (){
    const operacao = Number(prompt("Escolha uma operação:\n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão Real(/)\n 5 - Divisão Inteira(%)\n 6 - Potenciação(**)"));

        let num1 = Number(prompt("Insira seu primeiro número:"));
        let num2 = Number(prompt("Insira seu segundo número:"));
        let resultado;

        if (!num1 || !num2){
            alert("Erro - Parâmetros inválidos.");
            calculadora();
        }else{
            function soma(){
                resultado = num1 + num2;
                alert(num1 +" + "+ num2 +" = "+ resultado);
            }
    
            function subt(){
                resultado = num1 - num2;
                alert(num1 +" - "+ num2 +" = "+ resultado);
            }
    
            function mult(){
                resultado = num1 * num2;
                alert(num1 +" * "+ num2 +" = "+ resultado);
            }
    
            function divReal(){
                resultado = num1 / num2;
                alert(num1 +" / "+ num2 +" = "+ resultado);
            }
    
            function divInt(){
                resultado = num1 % num2;
                alert("O resto da divisão de "+ num1 +" por "+ num2 +" é "+ resultado);
            }
    
            function potenciacao(){
                resultado = num1 ** num2;
                alert(num1 +" elevado a "+ num2 +"ª é igual a "+ resultado);
            }
    
            function repeat(){
                let i = prompt("Deseja realiza um novo cálculo?\n 1 - Sim\n 2 - Não");
    
                if (i == 1){
                    calculadora();
                }else if (i == 2){
                    alert("Até mais!");
                }else{
                    alert("Insira uma opção válida.");
                    repeat();
                }
            }
        }

        switch(operacao){

            case 1:
                soma();
                repeat();
                break;
            
            case 2:
                subt();
                repeat();
                break;
                
            case 3:
                mult();
                repeat();
                break;  

            case 4:
                divReal();
                repeat();
                break;
                    
            case 5:
                divInt();
                repeat();
                break;
                            
            case 6:
                potenciacao();
                repeat();
                break;

            default:
                alert("Erro - Opção inválida.");
                calculadora();
    }
    
}

calculadora();