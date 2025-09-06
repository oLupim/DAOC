console.clear();
console.log("Ex 10 — filter: Strings com > 5 chars");

const palavras = ["casa", "javascript", "carro", "programação", "sol"];
const longas = palavras.filter(p => p.length > 5);
console.log(longas); // ["javascript", "programação"]
