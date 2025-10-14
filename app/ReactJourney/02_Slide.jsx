import React, { useState, useEffect } from 'react';

function UserData({ userId }) {
  const [user, setUser] = useState(null);

  // useEffect substitui componentDidMount, componentDidUpdate e componentWillUnmount
  useEffect(() => {
    // 1. Efeito a ser executado
    console.log(`Buscando dados para o usuário ${userId}`);
    fetch(`https://api.example.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data));

    // 2. (Opcional) Função de limpeza
    // Executada quando o componente é desmontado (como componentWillUnmount)
    return () => {
      console.log('Limpando o efeito anterior.');
    };
  }, [userId]); // 3. Array de dependências

  if (!user) {
    return <div>Carregando...</div>;
  }

  return <div>Olá, {user.name}</div>;
}