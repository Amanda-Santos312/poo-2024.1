/*Crie uma função que retorne os números de um array passados por parâmetro
separados por traço (-) no formato string. Para isso, use o método forEach dos
arrays.*/

let numeros = [3, 12, 15, 31, 63];

function printarNumeros(numeros: number[]) {
    let resultado: string = "";

    for (let numero of numeros) {
        resultado += numero.toString() + '-';
    }

    return resultado;
}

console.log(printarNumeros(numeros));