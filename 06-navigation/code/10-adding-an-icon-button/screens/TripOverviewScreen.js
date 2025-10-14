import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import TripItem from '../components/TripItem';
import { TRIPS, CATEGORIES } from '../data/dummy-data';

function TripOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedTrips = TRIPS.filter((TripItem) => {
    return TripItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderTripItem(itemData) {
    const item = itemData.item;

    const TripItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <TripItem {...TripItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedTrips}
        keyExtractor={(item) => item.id}
        renderItem={renderTripItem}
      />
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
