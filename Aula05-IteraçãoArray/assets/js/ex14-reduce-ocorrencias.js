console.clear();
console.log("Ex 14 — reduce: Contar ocorrências");

const letras = ["a", "b", "a", "c", "b", "a"];
const contagem = letras.reduce((acc, l) => {
  acc[l] = (acc[l] || 0) + 1;
  return acc;
}, {});
console.log(contagem); // { a: 3, b: 2, c: 1 }
