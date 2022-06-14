let myString = 'Uma \'frase\' qualquer'; //escapar texto com mesmo tipo de aspas usando duas barras invertidas
console.log(myString);

console.log('- - - - - - - - - - - - - - - -')

//                 01234567...
let outraString = 'Index string';

//Algumas manipulacoes com string
console.log(outraString.charAt(3)); // e
console.log(outraString.concat(' ', 'para teste')); //concatenacao
console.log(outraString.indexOf('string')); //index inicial da palavra

//Expressoes regulares
console.log(outraString.match(/[a-z]/g)); //array por causa do 'g'
console.log(outraString.search(/x/)); //encontrar o index da letra
console.log(outraString.replace(/Index/, 'Palavra')); //trocar string
console.log(outraString.length); //total de caracteres
console.log(outraString.slice(6, 12)); //inicio e fim do recorte
