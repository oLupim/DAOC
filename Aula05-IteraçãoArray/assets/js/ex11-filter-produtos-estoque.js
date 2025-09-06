console.clear();
console.log("Ex 11 — filter: Produtos em estoque");

const produtos = [
  { nome: "Notebook", preco: 2500, estoque: 5 },
  { nome: "Mouse", preco: 50, estoque: 0 },
  { nome: "Teclado", preco: 150, estoque: 3 },
  { nome: "Monitor", preco: 800, estoque: 0 }
];
const emEstoque = produtos.filter(p => p.estoque > 0);
console.log(emEstoque);
