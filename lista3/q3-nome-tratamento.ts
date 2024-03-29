/*Crie uma função que receba como parâmetros um nome e um pronome de
tratamento opcional. Caso esse último não seja fornecido, deve ser considerado o
valor “Sr”. Ao final, imprima uma saudação semelhante a “Sra. Sávia”.*/

function tratamento(name: string, pronoun? : string): string {
    if (pronoun) {
        return pronoun + " " + name;
    }
    return 'Sr';
}

console.log(tratamento('Amanda', 'Sra.')); //Sra. Amanda
console.log(tratamento('Amanda')); //Sr.