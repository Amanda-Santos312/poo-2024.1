/*Crie uma função exibir receba como parâmetro um “rest parameter” representando
strings. A função deve exibir no log cada um dos elementos do “rest parameter”.
Chame a função usando diferentes quantidade de parâmetros conforme abaixo:
exibir(“a”, “b”);
exibir(“a”, “b”, “c”);
exibir(“a”, “b”, “c”, “d”);*/

function exibir(...letras: string[]): void {
    letras.forEach((letras)=> console.log(letras));
    //console.log(a + ", " + letter.join(", "));
}

exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");