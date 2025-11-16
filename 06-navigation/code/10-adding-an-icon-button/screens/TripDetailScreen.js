import { useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import IconButton from '../components/IconButton';
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
        return (
          <IconButton
            icon="star"
            color="white"
            onPress={headerButtonPressHandler}
          /> 
        );
      },
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
          <Subtitle>Looks</Subtitle>
          <List data={selectedTrip.ingredients} />
          <Subtitle>Tours</Subtitle>
          <List data={selectedTrip.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default TripDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
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
