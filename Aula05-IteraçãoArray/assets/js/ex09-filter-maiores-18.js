console.clear();
console.log("Ex 9 — filter: Maiores de 18");

const usuarios = [
  { nome: "João", idade: 17 },
  { nome: "Maria", idade: 22 },
  { nome: "Pedro", idade: 16 },
  { nome: "Ana", idade: 25 }
];
const maiores = usuarios.filter(u => u.idade > 18);
console.log(maiores); // [{Maria...}, {Ana...}]
