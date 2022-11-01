function somar (num1, num2){
    return num1 + num2;
}

function subtrair (num1, num2){
    return num1 - num2;
}

function dividir (num1, num2){
    return num1 / num2;
}

function multiplicar (num1, num2){
    return num1 * num2;
}

console.log("____________ Teste de Operações / Calculadora ____________")
console.log("Função soma: ", somar(2,2));
console.log("Função subtração: ",subtrair (2,7));
console.log("Função divisão: ",dividir (3,2));
console.log("Função multiplicação: ",multiplicar (5,5));


// Calculadora nível 03

function quadradoDoNumero (numero){
    return multiplicar(numero, numero);
}

function mediaDeTresNumeros(num1,num2,num3){
    const somaNum1Num2 = somar(num1,num2);
    const resultadoSoma = somar(somaNum1Num2,num3);
    return dividir(resultadoSoma,3);

// ou return divisao(soma(soma(num1,num2),num3),3);
}

console.log("Função quadrado: ",quadradoDoNumero (5,5));
console.log("Função média de três: ",mediaDeTresNumeros (6.5,8,7));

function calculaPorcentagem (valorTotal,valorPercentual){
    //return (valorPercentual/100)*valorTotal;
    return multiplicar(dividir(valorPercentual,100),valorTotal);
}

console.log("Função calculaPorcentagem: ",calculaPorcentagem (150,4.4));

function geradorDePorcentagem(valor,valorTotal){
    return multiplicar(dividir(valor,valorTotal),100) + '%';
}

console.log("Função geradorDePorcentagem: ",geradorDePorcentagem(2,200));