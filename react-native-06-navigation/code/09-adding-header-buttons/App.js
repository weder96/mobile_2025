import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import TripOverviewScreen from './screens/TripOverviewScreen';
import TripDetailScreen from './screens/TripDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#1ac7b9ff' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#351401' },
          }}
        >
          <Stack.Screen
            name="TripsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen
            name="TripOverview"
            component={TripOverviewScreen}            
            />
          <Stack.Screen name="TripDetail" component={TripDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
