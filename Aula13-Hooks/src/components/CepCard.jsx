import React, { useState } from 'react';
import useFetchCep from '../hooks/useFetchCep';

function CepCard() {
  const [cep, setCep] = useState('');
  const data = useFetchCep(cep); 

  function handleChange(e) {
    setCep(e.target.value);               
  }

  function handleSubmit(e) {
    e.preventDefault();                       
  }

  return (
    <div>
      <h2>Buscar Endereço por CEP</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={cep}
          onChange={handleChange}
          placeholder="Digite o CEP (ex: 12345-678)"
        />
        <button type="submit">Buscar</button>
      </form>

      {data && (
        <div>
          <h3>Resultado:</h3>
          <p><strong>CEP:</strong> {data.cep}</p>
          <p><strong>Logradouro:</strong> {data.logradouro}</p>
          <p><strong>Bairro:</strong> {data.bairro}</p>
          <p><strong>Cidade:</strong> {data.localidade}</p>
          <p><strong>Estado (UF):</strong> {data.uf}</p>
        </div>
      )}
    </div>
  );
}

export default CepCard;
