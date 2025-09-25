function Saudacao({ nome, idade }) {
  return (
    <div style={{ margin: "auto" }}>
      <h2>Olá, {nome}!</h2>
      <p>Você tem {idade} anos.</p>
    </div>
  );
}

export default Saudacao;
