import { useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';

import List from '../components/TripDetail/List';
import Subtitle from '../components/TripDetail/Subtitle';
import TripDetails from '../components/TripDetails';
import { TRIPS } from '../data/dummy-data';

function TripDetailScreen({ route, navigation }) {
  const TripId = route.params.TripId;

  const selectedTrip = TRIPS.find((Trip) => Trip.id === TripId);

  function headerButtonPressHandler() {
    console.log('Pressed!');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return  (
         <View style={styles.headerContainer}>
          <Button title='Tap me' onPress={headerButtonPressHandler} style={styles.button}/>
         </View>
        )
      }
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedTrip.imageUrl }} />
      <Text style={styles.title}>{selectedTrip.title}</Text>
      <TripDetails
        duration={selectedTrip.duration}
        complexity={selectedTrip.complexity}
        affordability={selectedTrip.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedTrip.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedTrip.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default TripDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  headerContainer: {    
    paddingTop: 10,
    paddingRight:10,
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10, // Espaço interno
    borderRadius: 5,    
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
