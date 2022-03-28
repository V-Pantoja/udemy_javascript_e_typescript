/*
   - Criar 3 variaveis (ex: a, b, c)
   - Onde o valor da primeira esteja na segunda e o valor da segunda na terceira:
      varA = 2; //B
      varB = 4; //C
      varC = 6; //A

   - Mostrar na tela
*/

let a = 2;
let b = 4;
let c = 6;

let aTemp = a; //variavel criada para armazenar o VALOR de pelo menos uma das outras (no caso da variavel 'a')

a = b;
b = c;
c = aTemp;

console.log(`Valor a = ${a}`);
console.log(`Valor b = ${b}`);
console.log(`Valor c = ${c}`);
