console.clear();
console.log("Ex 12 — reduce: Somar todos os números");

const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acc, n) => acc + n, 0);
console.log("Soma:", soma); // 15
