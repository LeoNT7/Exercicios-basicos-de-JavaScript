/*  1 - Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".*/

let diaDaSemana = prompt ('Qual é o dia da semana? ')
let sabado = 'sabado'
let domingo = 'domingo'
console.log('O usuário informou que o dia da semana é ' + diaDaSemana)

// se o dia da semana for sabado OU se o dia da semana for domingo...
if (diaDaSemana == sabado || diaDaSemana == domingo) {
    alert('Bom fim de Semana!')
} else {
    alert('Boa Semana!')
} 

/* 2 - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.*/

let numero = prompt('Digite um número: ')
console.log('O usuário informou que o numero é ' + numero)

if (numero >= 0) {
    alert('O número informado é positivo')
}
else {
    alert('O número informado é negativo')
}
/* 3 - Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.*/

let saldo = 10

alert(`o saldo da sua conta é R$${saldo}`)

/* 4 - Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.*/

let nome = prompt('Qual é o seu nome?')
console.log('O(a) usuário(a) informou que o nome dele(a) é ' + nome)

alert(`Bem vindo(a) ${nome}!`)


