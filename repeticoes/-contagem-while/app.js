//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

contador = 0;

while (contador < 10) {
    contador++
    console.log(contador)
}

//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

contador = 10;

while (contador > 0) {
    contador--
    console.log(contador)
}

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let numero1 = prompt('Digite um número para contagem regressiva: ');
contador = numero1;

while (contador > 0) {
    console.log(contador);
    contador--
}
console.log('Fim da contagem regressiva')

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numero2 = prompt('Digite um número para contagem progressiva: ');
contador = 0;

while (contador <= numero2) {
    console.log(contador)
    contador++
}
console.log('Fim da contagem progressiva')