//Crie um arquivo calculadora.js que terá as diferentes operações  para realizar.
var valor1 = 105;
var valor2 = 3;
var valor3 = 6;

//Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.
function adicionar(valor1,valor2){
    return valor1 + valor2;
}
const mais = adicionar(valor1,valor2)


//Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.
function subtracao(valor1,valor2){
    return valor1 - valor2;
}
const menos = subtracao(valor1,valor2)


//Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.
function multiplicacao(valor1,valor2){
    return valor1 * valor2;
}
const vezes = multiplicacao(valor1,valor2)


//Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.
function divisao(valor1,valor2){
    return valor1 / valor2;
}
const dividir = divisao(valor1,valor2)

//Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado
function quadradoDoNumero(valor1,){
    return valor1 * valor1;
}
const quadrado = quadradoDoNumero(valor1,valor2)


//Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
function mediaDeTresNumeros(valor1,valor2,valor3){
    return (valor1 + valor2 + valor3)/3;
}
const media3 =mediaDeTresNumeros(valor1,valor2,valor3)


//Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
function calculaPorcentagem(valor1,valor2){
    return (valor1*(valor2/100)) + '%';
}
const porcento =calculaPorcentagem(valor1,valor2)


//Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
function geradorDePorcentagem(valor1,valor2){
    return valor1 * 100 / valor2 + '%';
}
const gerarPorcento =geradorDePorcentagem(valor1,valor2)

//No seu arquivo calculadora.js,  a partir das 4 funções feitas anteriormente, crie um console.log no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções
console.log("-------------Teste de Operações / Calculadora----------")

console.log(mais)
console.log(menos)
console.log(vezes)
console.log(dividir)
console.log(media3)
console.log(porcento)
console.log(gerarPorcento)

