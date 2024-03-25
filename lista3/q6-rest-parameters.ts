/*Crie uma função exibir receba como parâmetro um “rest parameter” representando
strings. A função deve exibir no log cada um dos elementos do “rest parameter”.
Chame a função usando diferentes quantidade de parâmetros conforme abaixo:
exibir(“a”, “b”);
exibir(“a”, “b”, “c”);
exibir(“a”, “b”, “c”, “d”);*/

function exibir(a: string , ...letter: string[]): void {
    console.log(a + ", " + letter.join(", "));
}

exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");