//Criar uma função que exibe "Olá, mundo!" no console.
function saudacao(){
    console.log('Olá mundo!!')
}
saudacao();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function saudacaoUser(nome){
    console.log(`Olá ${nome}! Seja bem vindo(a)`)
}

saudacaoUser('Leo');

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function calcularDobro(numero) {
    return numero * 2;
}

console.log(`O dobro do número é ${calcularDobro(5)}`);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.

function calcularMedia (num1,num2,num3){
    return (num1 + num2 + num3) / 3
}

console.log(`A média é: ${calcularMedia(8,10,9)}`)

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function numMaior (a, b){
    // o numero A é maior que o B ? se verdadeiro retorna o A se falso retorna o B
    return a > b ? a : b
}

console.log(`O maior número é: ${numMaior(5, 10)}`)

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multiplicacaoNum(numeroMultiplicacao) {
    return numeroMultiplicacao * numeroMultiplicacao
}

console.log(`A multiplicação do número por ele mesmo é ${multiplicacaoNum(2)}`)