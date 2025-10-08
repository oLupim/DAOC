import { useState, useEffect } from 'react';

const useFetchCep = (cep) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCep = async () => {
      if (!cep) return;

      const isValid = /^[0-9]{5}-?[0-9]{3}$/.test(cep);
      if (!isValid) {
        setError('CEP inválido');
        setData(null);
        return;
      }

      setLoading(true);
      setError(null);
      setData(null);

      try {
        const cleanCep = cep.replace('-', '');
        const res = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
        const json = await res.json();

        if (json.erro) {
          setError('CEP não encontrado');
        } else {
          setData(json);
        }
      } catch {
        setError('Erro ao buscar CEP');
      } finally {
        setLoading(false);
      }
    };

    fetchCep();
  }, [cep]);

  return { data, loading, error };
};

export default useFetchCep;
