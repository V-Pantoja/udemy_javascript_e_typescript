/*
   Aritméticos:
   + (Adicao / Concatenacao)
   - subtracao
   * multplicacaoo
   / divisao
   ** potencia
   % resto da divisao

   O  rdem de precedencia:
   1 - ()
   2 - **
   3 - * / %
   4 - + -
*/

const num1 = 2;
const num2 = 8;

console.log(num1 ** num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 % num2);
console.log(num1 + (num1 * 2) / num2);
