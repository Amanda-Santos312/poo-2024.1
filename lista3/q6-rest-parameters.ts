/*Crie uma função exibir receba como parâmetro um “rest parameter” representando
strings. A função deve exibir no log cada um dos elementos do “rest parameter”.
Chame a função usando diferentes quantidade de parâmetros conforme abaixo:
exibir(“a”, “b”);
exibir(“a”, “b”, “c”);
exibir(“a”, “b”, “c”, “d”);*/

let rest_parameters = (a: string , ...letter: string[])=> {
    console.log(a + ", " + letter.join(", "));
}

rest_parameters("a");
rest_parameters("a", "b");
rest_parameters("a", "b", "c");