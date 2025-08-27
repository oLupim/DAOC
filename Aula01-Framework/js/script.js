const btn = document.getElementById("btn-caracteristicas");

const caracteristicas = [
  "Baseado em Componentes Reutilizáveis",
  "Atualização eficiente com Virtual DOM",
  "Grande comunidade e ecossistema",
  "Suporte a Single Page Applications (SPA)",
  "Integração fácil com outras bibliotecas"
];

btn.addEventListener("click", () => {
  caracteristicas.forEach(item => {
    alert(item);
  });
});
