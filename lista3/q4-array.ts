/*Crie uma função que retorne os números de um array passados por parâmetro
separados por traço (-) no formato string. Para isso, use o método forEach dos
arrays.*/

function printarNumeros(numeros: string[]) {
    let resultado: string = "";

    numeros.forEach((numero) => resultado += numero + "-");

    return resultado.substring(0, resultado.length-1); //substring
    /*for (let numero of numeros) {
        resultado += numero + '-'; //ia precisar aqui do .toString()
    }
    return resultado;*/
}

console.log(printarNumeros(['3', '12', '15', '31', '63']));