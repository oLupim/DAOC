console.clear();
console.log("Ex 8 — filter: Números pares");

const numeros = [1,2,3,4,5,6,7,8,9,10];
const pares = numeros.filter(n => n % 2 === 0);
console.log(pares); // [2,4,6,8,10]
