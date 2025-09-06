console.clear();
console.log("Ex 20 — E-commerce completo");

const pedidos = [
  {
    id: 1,
    cliente: "Ana",
    itens: [
      { produto: "Notebook", preco: 2500, quantidade: 1 },
      { produto: "Mouse",    preco: 50,   quantidade: 2 }
    ]
  },
  {
    id: 2,
    cliente: "Carlos",
    itens: [
      { produto: "Teclado", preco: 150, quantidade: 1 },
      { produto: "Monitor", preco: 800, quantidade: 1 }
    ]
  }
];

// a) total por pedido
const totaisPorPedido = pedidos.map(p => {
  const total = p.itens.reduce((acc, it) => acc + it.preco * it.quantidade, 0);
  return { id: p.id, cliente: p.cliente, total };
});

// b) pedidos > 500
const acimaDe500 = totaisPorPedido.filter(p => p.total > 500);

// c) nomes dos clientes
const clientes = pedidos.map(p => p.cliente);

// d) faturamento total
const faturamentoTotal = totaisPorPedido.reduce((acc, p) => acc + p.total, 0);

// e) quantidade total de produtos vendidos
const totalProdutosVendidos = pedidos
  .map(p => p.itens.reduce((acc, it) => acc + it.quantidade, 0))
  .reduce((acc, q) => acc + q, 0);

console.log({ totaisPorPedido, acimaDe500, clientes, faturamentoTotal, totalProdutosVendidos });
