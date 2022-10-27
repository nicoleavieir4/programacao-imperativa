let nome = "Aline Ferreira";
let idade = 33;
const peso = 70;
const altura = 1.70;
const plano = true;

let imc = (peso / (altura**2)).toFixed(2)

console.log(`${nome} tem ${idade} anos e seu índice de massa corporal é de ${imc}`);
