/*Crie uma função que recebe como parâmetro um número e retorna true se o
número for par e false se for ímpar.*/

let numero = 3;

let verificarNumero = parImpar(numero);

console.log(verificarNumero);

function parImpar(numero: number): boolean {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}