//Alguns metodos da função window
window.alert('Janela de aviso'); //retorna Undefined
window.confirm("Janela de confirmação"); //retorna True ou False
window.prompt(`Janela de receber dados`); //retorna String

//Exercicio
let num1 = prompt('Me diga o primeiro número:');
let num2 = prompt('Agora o segundo:');

//convercao do tipo do valor das variaveis
num1 = Number(num1);
num2 = Number(num2);

document.write(`O resultado da soma dos dois números foi: <strong>${num1 + num2}</strong> <br/>`);
