//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function imc (peso, altura ) {
  return peso / (altura * altura)
}
//.toFixed(2) formata o número para ter duas casas decimais (como 12.34)
console.log(imc(70, 1.75).toFixed(2));


//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorial(n) {
  let resultado = 1;

  for (let i = n; i > 1; i--) {
  resultado *= i;
  }

  return resultado;
}

console.log(fatorial(5));

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converte (dolar) {
  return dolar * 4.80;
}
console.log(`Cambio realizado, valor R$${converte(10).toFixed(2)} reais`)


//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function calculoRetangulo(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);
  return `Área: ${area} | Perímetro: ${perimetro}`;
}

console.log(calculoRetangulo(10, 10));

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calculoCirculo(raio) {
  let area = 3.14 * raio * raio;
  let perimetro = 2 * 3.14 * raio;
  return `Área: ${area.toFixed(2)} | Perímetro: ${perimetro.toFixed(2)}`;
}

console.log(calculoCirculo(5));

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${(numero * i)}`);
  }
}
tabuada(10)

