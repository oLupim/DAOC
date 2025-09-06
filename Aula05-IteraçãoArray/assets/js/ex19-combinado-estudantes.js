console.clear();
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
