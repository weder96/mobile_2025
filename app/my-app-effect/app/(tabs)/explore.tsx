import { useEffect, useState } from 'react';
import {StyleSheet, Text, TextInput, View } from 'react-native';

export default function TabTwoScreen() {  
  const [nome, setNome] = useState('');

  const onTypeEdit = () => {
    console.log("text")
  }

  useEffect(() =>{
     console.log("useEffect");     
  },[]);

  useEffect(() =>{
     console.log("useEffect mudou o nome");     
  },[nome]);

  return (
   <View style={styles.container}>
     <Text>Ola Explorer</Text>
     <TextInput 
     placeholder='Digte seu nome'
     value={nome}
     onChangeText={setNome}
     >
     </TextInput>
     <Text style={styles.title}>{nome}</Text>
   </View>
  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 8,  
  },
   title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40, 
   }
});
