/*Crie uma função que recebe como parâmetro um número e retorna true se o
número for primo e false caso contrário.*/

function ehPrimo(num: number): boolean {
    let resultado = true;

    if (num === 2) {
        return true;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            resultado = false;
        }
    }
    return resultado;
}


console.log(ehPrimo(11));