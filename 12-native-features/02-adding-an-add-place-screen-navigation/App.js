
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>      
      <Stack.Navigator initialRouteName="AllPlaces">                
        <Stack.Screen 
          name="Home" 
          component={AllPlaces} 
          options={{ title: 'Início' ,headerShown: false}}
        />
        <Stack.Screen 
          name="Details" 
          component={AddPlace}
          options={{ title: 'Detalhes' , headerShown: false}}
        />        
      </Stack.Navigator>
    </NavigationContainer>    
  );
}

