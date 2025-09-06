console.log(" ")
console.log("Ex 1 - ForEach")

const numeros = [1, 2, 3, 4, 5]
numeros.forEach((n) => console.log(`Numero: ${n}`))


console.log(" ")
console.log("Ex 2 — forEach: Somar elementos");

const valores = [10, 20, 30, 40, 50];
let soma = 0;
valores.forEach((v) => { soma += v; });
console.log("Soma:", soma); // 150


console.log(" ")
console.log("Ex 3 — forEach: Modificar array existente");

const numeros3 = [1, 2, 3, 4, 5];
numeros.forEach((_, i, arr) => { arr[i] = arr[i] * 2; });
console.log(numeros3); // [2, 4, 6, 8, 10]


console.log(" ")
console.log("Ex 4 — map: Transformar números (quadrado)");

const numeros4 = [1, 2, 3, 4, 5];
const quadrados = numeros.map(n => n * n);
console.log(quadrados); // [1, 4, 9, 16, 25]


console.log(" ")
console.log("Ex 5 — map: Celsius → Fahrenheit");

const celsius = [0, 20, 30, 40];
const fahrenheit = celsius.map(c => (c * 9/5) + 32);
console.log(fahrenheit); // [32, 68, 86, 104]



console.log(" ")
console.log("Ex 6 — map: Extrair propriedades");

const usuarios6 = [
  { id: 1, nome: "Ana", idade: 25 },
  { id: 2, nome: "Carlos", idade: 30 },
  { id: 3, nome: "Maria", idade: 28 }
];
const nomes = usuarios6.map(u => u.nome);
console.log(nomes); // ["Ana", "Carlos", "Maria"]


console.log(" ")
console.log("Ex 7 — map: Capitalizar");

const palavras = ["javascript", "python", "java", "ruby"];
const capitalizadas = palavras.map(p => p.charAt(0).toUpperCase() + p.slice(1));
console.log(capitalizadas); // ["Javascript", "Python", "Java", "Ruby"]


console.log(" ")
console.log("Ex 8 — filter: Números pares");

const numeros8 = [1,2,3,4,5,6,7,8,9,10];
const pares = numeros8.filter(n => n % 2 === 0);
console.log(pares); // [2,4,6,8,10]


console.log(" ")
console.log("Ex 9 — filter: Maiores de 18");

const usuarios = [
  { nome: "João", idade: 17 },
  { nome: "Maria", idade: 22 },
  { nome: "Pedro", idade: 16 },
  { nome: "Ana", idade: 25 }
];
const maiores = usuarios.filter(u => u.idade > 18);
console.log(maiores); // [{Maria...}, {Ana...}]


console.log(" ")
console.log("Ex 10 — filter: Strings com > 5 chars");

const palavras10 = ["casa", "javascript", "carro", "programação", "sol"];
const longas = palavras10.filter(p => p.length > 5);
console.log(longas); // ["javascript", "programação"]


console.log(" ")
console.log("Ex 11 — filter: Produtos em estoque");

const produtos = [
  { nome: "Notebook", preco: 2500, estoque: 5 },
  { nome: "Mouse", preco: 50, estoque: 0 },
  { nome: "Teclado", preco: 150, estoque: 3 },
  { nome: "Monitor", preco: 800, estoque: 0 }
];
const emEstoque = produtos.filter(p => p.estoque > 0);
console.log(emEstoque);


console.log(" ")
console.log("Ex 12 — reduce: Somar todos os números");

const numeros12 = [1, 2, 3, 4, 5];
const soma12 = numeros12.reduce((acc, n) => acc + n, 0);
console.log("Soma:", soma12); // 15


console.log(" ")
console.log("Ex 13 — reduce: Maior número");

const numeros13 = [10, 5, 8, 20, 3];
const maior = numeros13.reduce((acc, n) => n > acc ? n : acc, -Infinity);
console.log("Maior:", maior); // 20


console.log(" ")
console.log("Ex 14 — reduce: Contar ocorrências");

const letras = ["a", "b", "a", "c", "b", "a"];
const contagem = letras.reduce((acc, l) => {
  acc[l] = (acc[l] || 0) + 1;
  return acc;
}, {});
console.log(contagem); // { a: 3, b: 2, c: 1 }


console.log(" ")
console.log("Ex 14 — reduce: Contar ocorrências");

const letras14 = ["a", "b", "a", "c", "b", "a"];
const contagem14 = letras14.reduce((acc, l) => {
  acc[l] = (acc[l] || 0) + 1;
  return acc;
}, {});
console.log(contagem14); // { a: 3, b: 2, c: 1 }


console.log(" ")
console.log("Ex 15 — reduce: Valor total do carrinho");

const carrinho = [
  { produto: "Camiseta", preco: 50, quantidade: 2 },
  { produto: "Calça", preco: 100, quantidade: 1 },
  { produto: "Tênis", preco: 200, quantidade: 1 }
];
const total15 = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
console.log("Total:", total15); // 350


console.log(" ")
console.log("Ex 16 — reduce: Agrupar por categoria");

const produtos16 = [
  { nome: "iPhone", categoria: "eletrônicos" },
  { nome: "Camiseta", categoria: "roupas" },
  { nome: "Notebook", categoria: "eletrônicos" },
  { nome: "Calça", categoria: "roupas" }
];
const agrupado = produtos16.reduce((acc, p) => {
  (acc[p.categoria] = acc[p.categoria] || []).push(p);
  return acc;
}, {});
console.log(agrupado);


console.log(" ")
console.log("Ex 17 — Pipeline: map -> filter -> reduce");

const numeros17 = [1, 2, 3, 4, 5, 6];
const resultado = numeros17
  .map(n => n * n)        // quadrado
  .filter(n => n % 2 === 0) // pares
  .reduce((acc, n) => acc + n, 0); // soma
console.log("Resultado:", resultado); // 56


console.log(" ")
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
const valores18 = acimaDe1000.map(v => v.valor);

// c) total
const total = valores18.reduce((acc, v) => acc + v, 0);

// d) agrupar por vendedor
const porVendedor = vendas.reduce((acc, v) => {
  (acc[v.vendedor] = acc[v.vendedor] || []).push(v);
  return acc;
}, {});

console.log({ acimaDe1000, valores18, total, porVendedor });


console.log(" ")
console.log("Ex 19 — Processamento de estudantes");

const estudantes = [
  { nome: "Ana",    notas: [8, 7, 9, 6] },
  { nome: "Carlos", notas: [7, 8, 6, 9] },
  { nome: "Maria",  notas: [9, 9, 8, 10] },
  { nome: "João",   notas: [5, 6, 7, 4] }
];

// a) média por estudante
const medias = estudantes.map(e => {
  const media = e.notas.reduce((acc, n) => acc + n, 0) / e.notas.length;
  return { nome: e.nome, media: Number(media.toFixed(2)) };
});

// b) média >= 7
const aprovados = medias.filter(m => m.media >= 7);

// c) nome + status
const comStatus = medias.map(m => ({ nome: m.nome, status: m.media >= 7 ? "aprovado" : "reprovado" }));

// d) quantos aprovados
const qtdAprovados = comStatus.reduce((acc, e) => acc + (e.status === "aprovado" ? 1 : 0), 0);

console.log({ medias, aprovados, comStatus, qtdAprovados });


console.log(" ")
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