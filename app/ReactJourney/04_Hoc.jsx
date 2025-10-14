import { useState, useEffect } from 'react';
import api from 'util/api';

const useData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);      
      const result = await api.getData(url);      
      setData(result);
    };
    fetchData();
  }, [url]); 
  return { data, isLoading, error };
};

function MyComponent({ url }) {
  const { data, isLoading, error } = useData(url);
  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Ocorreu um erro: {error.message}</div>;
  }
  return (
    <div>
      <h1>Dados Carregados:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
export default MyComponent;



