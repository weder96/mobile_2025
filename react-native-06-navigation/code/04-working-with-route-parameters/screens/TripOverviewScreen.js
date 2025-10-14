import { View, Text, StyleSheet } from 'react-native';

import { TRIPS } from '../data/dummy-data';

function TripOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>Trip Overview Screen - {catId}</Text>
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
