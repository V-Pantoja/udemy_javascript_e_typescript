/*
   Victor Pantoja tem 26 anos, pesa 55 Kg
   tem 1.60 de altura e seu IMC é de 
*/

const nome = 'Victor';
const sobrenome = 'Pantoja';
const idade = 26;
const peso = 55;
const alturaEmM = 1.60;

let imc; //peso dividido por (altura ao quadrado)
let anoNascimento;

imc = peso / (alturaEmM ** 2);
anoNascimento = 2022 - 26;

//display
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg`);
console.log(`tem ${alturaEmM} de altura e seu Índice de Massa Corporal é ${imc}`);
console.log(`Ano de nascimento é ${anoNascimento}`);
