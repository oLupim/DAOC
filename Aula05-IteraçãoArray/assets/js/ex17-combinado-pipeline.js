console.clear();
console.log("Ex 17 — Pipeline: map -> filter -> reduce");

const numeros = [1, 2, 3, 4, 5, 6];
const resultado = numeros
  .map(n => n * n)        // quadrado
  .filter(n => n % 2 === 0) // pares
  .reduce((acc, n) => acc + n, 0); // soma
console.log("Resultado:", resultado); // 56
