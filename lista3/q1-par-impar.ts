/*Crie uma função que recebe como parâmetro um número e retorna true se o
número for par e false se for ímpar.*/

function parImpar(numero: number): boolean {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(parImpar(3));