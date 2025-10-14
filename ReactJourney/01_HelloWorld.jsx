import React, { useState } from 'react';

function HelloWorld({ initialName = 'Mundo' }) {
  // O Hook useState declara a variável de estado 'name' 
  // e a função 'setName' para atualizá-la.
  const [name, setName] = useState(initialName);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input onChange={handleChange} value={name} />
      <p>Olá, {name}!</p>
    </div>
  );
}


