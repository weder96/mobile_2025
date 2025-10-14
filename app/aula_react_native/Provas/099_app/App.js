// Arquivo: App.js

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const incrementarContagem = () => {
    setCount(prevCount => prevCount + 1);
  };

  const zerarContagem = () => {
    setCount(0);
  };

  return (

    <SafeAreaView style={styles.container}>
      
      <Text style={styles.title}>Contador de Pessoas</Text>
      
      <Text style={styles.counterText}>{count}</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="ADICIONAR" 
          onPress={incrementarContagem} 
          color="#007bff"
        />
        
        {/* Etapa 4: Renderizar o botão de zerar, chamando a função correta no 'onPress' */}
        <Button 
          title="ZERAR" 
          onPress={zerarContagem}
          color="#dc3545"
        />
      </View>

    </SafeAreaView>
  );
}

// Etapa 5: Criar a folha de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center', // Centraliza horizontalmente
    justifyContent: 'center', // Centraliza verticalmente
    padding: 20,
  },
  title: {
    fontSize: 24, // Tamanho da fonte do título
    fontWeight: 'bold',
    marginBottom: 20, // Espaçamento abaixo do título
  },
  counterText: {
    fontSize: 72, // Tamanho da fonte do contador
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40, // Espaçamento abaixo do contador
  },
  buttonContainer: {
    // Este container ajuda a organizar os botões
    width: '80%',
  },
  // O componente Button padrão não aceita estilo de espaçamento diretamente,
  // mas podemos envolvê-los em uma View ou usar um espaçador se necessário.
  // Para esta prova simples, o espaçamento padrão é aceitável.
});