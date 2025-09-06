console.clear();
console.log("Ex 13 — reduce: Maior número");

const numeros = [10, 5, 8, 20, 3];
const maior = numeros.reduce((acc, n) => n > acc ? n : acc, -Infinity);
console.log("Maior:", maior); // 20
