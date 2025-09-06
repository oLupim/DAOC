console.clear();
console.log("Ex 6 — map: Extrair propriedades");

const usuarios = [
  { id: 1, nome: "Ana", idade: 25 },
  { id: 2, nome: "Carlos", idade: 30 },
  { id: 3, nome: "Maria", idade: 28 }
];
const nomes = usuarios.map(u => u.nome);
console.log(nomes); // ["Ana", "Carlos", "Maria"]
