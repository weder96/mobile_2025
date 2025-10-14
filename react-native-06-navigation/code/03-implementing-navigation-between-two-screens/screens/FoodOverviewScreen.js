import { View, Text, StyleSheet } from 'react-native';

import { TRIPS } from '../data/dummy-data';

function TripOverviewScreen() {
  return (
    <View style={styles.container}>
      <Text>Trips Overview Screen</Text>
    </View>
  );
}

export default TripOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
