console.clear();
console.log("Ex 18 — Análise de vendas");

const vendas = [
  { mes: "Janeiro", vendedor: "João", valor: 1000 },
  { mes: "Janeiro", vendedor: "Maria", valor: 1500 },
  { mes: "Fevereiro", vendedor: "João", valor: 800 },
  { mes: "Fevereiro", vendedor: "Maria", valor: 1200 },
];

// a) acima de 1000
const acimaDe1000 = vendas.filter(v => v.valor > 1000);

// b) extrair valores
const valores = acimaDe1000.map(v => v.valor);

// c) total
const total = valores.reduce((acc, v) => acc + v, 0);

// d) agrupar por vendedor
const porVendedor = vendas.reduce((acc, v) => {
  (acc[v.vendedor] = acc[v.vendedor] || []).push(v);
  return acc;
}, {});

console.log({ acimaDe1000, valores, total, porVendedor });
