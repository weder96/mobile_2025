// Arquivo: App.js

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

export default function App() {
  const [resultado, setResultado] = useState(1);
  
  const rolarDado = () => {
    // Math.random() gera um número entre 0 (inclusivo) e 1 (exclusivo).
    // * 6 -> Transforma em um número entre 0 e 5.99...
    // Math.floor() -> Arredonda para baixo (0, 1, 2, 3, 4, ou 5).
    // + 1 -> Ajusta o intervalo para 1 a 6.
    const novoResultado = Math.floor(Math.random() * 6) + 1;
    
    // Atualiza o estado com o novo número.
    setResultado(novoResultado);
  };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Etapa 4: Título */}
      <Text style={styles.title}>Simulador de Dado</Text>
      
      {/* Etapa 4: View que representa a face do dado */}
      <View style={styles.dice}>
        {/* Etapa 4: Texto que exibe o resultado */}
        <Text style={styles.diceNumber}>{resultado}</Text>
      </View>
      
      {/* Etapa 4: Botão para rolar o dado */}
      <View style={styles.buttonContainer}>
      <Button
        title="JOGAR O DADO"
        onPress={rolarDado}
        color="#841584"
      />
      </View>
    </SafeAreaView>
  );
}

// Etapa 5: Folha de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center', // Centraliza horizontalmente
    justifyContent: 'center', // Centraliza verticalmente
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40, // Espaço abaixo do título
  },
  dice: {
    width: 150,
    height: 150,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 10,    
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  diceNumber: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {    
    width: '80%',
  },
});