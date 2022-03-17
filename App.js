import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Main } from './src/screens/Main';
import { styles } from './src/theme/appTheme';


export default function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar translucent={false} style={'light'}/>
      <Main/>
    </View>
  );
}


