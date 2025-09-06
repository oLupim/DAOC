console.clear();
console.log("Ex 15 — reduce: Valor total do carrinho");

const carrinho = [
  { produto: "Camiseta", preco: 50, quantidade: 2 },
  { produto: "Calça", preco: 100, quantidade: 1 },
  { produto: "Tênis", preco: 200, quantidade: 1 }
];
const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
console.log("Total:", total); // 350
