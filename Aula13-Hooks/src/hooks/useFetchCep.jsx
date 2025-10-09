import { useState, useEffect } from 'react';

function useFetchCep(cep) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!cep) return;

    async function fetchCep() {
      const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const dados = await resposta.json();
      setData(dados); // Salva os dados na variável data
    }

    fetchCep();

  }, [cep]); // Sempre que o CEP mudar, refaz a busca

  return data;
}

export default useFetchCep;
