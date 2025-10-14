import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

// Componente funcional HelloWorld
function HelloWorld() {
  // 1. Hook useState para gerenciar o estado 'name'
  const [name, setName] = useState('');  
  const handleChange = (event) => {
    // Atualiza o estado 'name' com o valor digitado no input
    setName(event.target.value);
  };

  return (
    <div>
      <label>Name</label>      
      <input onChange={handleChange} value={name} />      
      <p>Olá, {name || 'visitante'}!</p>
    </div>
  );
}

const container = document.getElementById('content');
const root = createRoot(container);
root.render(<HelloWorld />);