import { View } from 'react-native';
import { observer } from 'mobx-react-lite';
import Lines from './screens/Lines'
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
    <View>
      <Lines />
    </View>
    </SafeAreaProvider>
  );
}

export default observer(App);