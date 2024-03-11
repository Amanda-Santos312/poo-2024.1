/*Crie uma função que recebe como parâmetro um número e retorna true se o
número for primo e false caso contrário.*/

let num = 2;

let verificarNum = ehPrimo(num);

console.log(verificarNum);

function ehPrimo(num: number) {
    if (num <= 1) {
        return false;
    } else if (num === 3 || num === 5 || num === 7) {
        return true;
    }
    return !ehDivisivel(num, 3) && !ehDivisivel(num, 5) && !ehDivisivel(num, 7)
}

function ehDivisivel(num: number, divisor: number) {
    return num % divisor === 0;
}