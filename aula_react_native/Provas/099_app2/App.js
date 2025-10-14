// Arquivo: App.js

import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  SafeAreaView, 
  Alert 
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const exibirSaudacao = () => {
    if (!nome.trim()) {
      Alert.alert("Atenção", "Por favor, digite seu nome.");
      return; // Para a execução da função aqui
    }
    setMensagem(`Olá, ${nome}! Seja bem-vindo(a).`);
  };

   const clearSaudacao = () => {
     setNome("");
     setMensagem("");
   }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
     
        <Text style={styles.title}>Qual é o seu nome?</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome aqui"
          value={nome} 
          onChangeText={setNome}
        />
        
        <View style={styles.buttonContainer}>
        <Button
          title="DIZER OLÁ"          
          onPress={exibirSaudacao}
          color="#1e90ff"
        />

          <Button
          title="LIMPAR"
          onPress={clearSaudacao}
          color="#50c2d9"
        />
       </View>

        {mensagem ? (
          <Text style={styles.greetingMessage}>{mensagem}</Text>
        ) : null}

      </View>
    </SafeAreaView>
  );
}

// Etapa 5: Folha de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  greetingMessage: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: '600',
    color: '#2c3e50',
    textAlign: 'center',
  },
  buttonContainer:{
    width: '80%',    
    marginHorizontal: 25,
    flexDirection:'column',
    marginTop: 30
  }
});