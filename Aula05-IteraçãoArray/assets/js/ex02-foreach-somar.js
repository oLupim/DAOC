console.clear();
console.log("Ex 2 — forEach: Somar elementos");

const valores = [10, 20, 30, 40, 50];
let soma = 0;
valores.forEach((v) => { soma += v; });
console.log("Soma:", soma); // 150
