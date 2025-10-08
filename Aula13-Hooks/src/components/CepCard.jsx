import React, { useState } from 'react';
import useFetchCep from '../hooks/useFetchCep'; // Importando o Custom Hook

const CepCard = () => {
  const [cep, setCep] = useState('');
  const { data, loading, error } = useFetchCep(cep);

  const handleCepChange = (event) => {
    setCep(event.target.value);
  };

  // Função para prevenir o envio do formulário (porque a busca é feita via useEffect)
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Buscar Endereço por CEP</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={cep}
          onChange={handleCepChange}
          placeholder="Digite o CEP (ex: 12345-678)"
        />
        <button type="submit">Buscar</button>
      </form>

      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && !loading && !error && (
        <div>
          <h3>Resultado:</h3>
          <p><strong>CEP:</strong> {data.cep}</p>
          <p><strong>Logradouro:</strong> {data.logradouro}</p>
          <p><strong>Bairro:</strong> {data.bairro}</p>
          <p><strong>Localidade:</strong> {data.localidade}</p>
          <p><strong>UF:</strong> {data.uf}</p>
        </div>
      )}
    </div>
  );
};

export default CepCard;
