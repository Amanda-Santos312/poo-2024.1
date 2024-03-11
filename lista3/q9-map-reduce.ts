/*Crie um exemplo usando a função map para dobrar os elementos de um array e reduce para totalizar a soma dos elementos do array.*/

const values = [2, 3, 4, 5, 6];

const dobrar = values.map(num => num*2);

const somatorio = dobrar.reduce((acumulado, atual) => acumulado + atual, 0);

console.log(dobrar); //[4, 6, 8, 10, 12]
console.log(somatorio); //40