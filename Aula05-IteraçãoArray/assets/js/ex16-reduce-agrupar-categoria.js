console.clear();
console.log("Ex 16 — reduce: Agrupar por categoria");

const produtos = [
  { nome: "iPhone", categoria: "eletrônicos" },
  { nome: "Camiseta", categoria: "roupas" },
  { nome: "Notebook", categoria: "eletrônicos" },
  { nome: "Calça", categoria: "roupas" }
];
const agrupado = produtos.reduce((acc, p) => {
  (acc[p.categoria] = acc[p.categoria] || []).push(p);
  return acc;
}, {});
console.log(agrupado);
