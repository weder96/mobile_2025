import React, { useState } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, FlatList, SafeAreaView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [carouselEntries, setCarouselEntries] = useState([
    { title: 'Playstation 5', image: require('./assets/ps5.png') },
    { title: 'XBox Series X', image: require('./assets/xbox.png') },
    { title: 'Nintendo Switch OLED', image: require('./assets/nintendo.png') },
  ]);

  const [listEntries, setListEntries] = useState([
    { title: 'Playstation 5', image: require('./assets/ps5.png'), price: 'R$ 5000,00' },
    { title: 'XBox Series X', image: require('./assets/xbox.png'), price: 'R$ 4500,00' },
    { title: 'Nintendo Switch OLED', image: require('./assets/nintendo.png'), price: 'R$ 4000,00' },
    { title: 'Final Fantasy 7 Rebirth', image: require('./assets/ff7.png'), price: 'R$ 400,00' },
  ]);

  const PressableButton = ({ onPress, title, style }) => {
    return (
      <Pressable style={[styles.button, style]} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <PressableButton title="Comprar agora" onPress={() => console.log(`Comprado: ${item.title}`)} />
    </View>
  );

  const renderListItem = ({ item }) => (
    <View style={styles.listItem}>
      <Image source={item.image} style={styles.listImage} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <PressableButton title="Comprar agora" onPress={() => console.log(`Comprado: ${item.title}`)} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={carouselEntries}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        style={styles.carouselContainer}
      />
      <FlatList
        data={listEntries}
        renderItem={renderListItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa', // Cor de fundo clara
  },
  carouselContainer: {
    flex: 1,
    paddingVertical: 10,
  },
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 300,
    width: Dimensions.get('window').width - 40,
    marginHorizontal: 10,
    padding: 10,
    elevation: 5, // Sombra
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007bff', // Azul
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  listContainer: {
    paddingBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
    elevation: 3, // Sombra para a lista
  },
  listImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
    color: '#28a745', // Verde para o preço
  },
});

export default App;
