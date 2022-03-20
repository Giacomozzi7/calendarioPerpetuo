import { StatusBar } from 'expo-status-bar';
import React, {  useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Main } from './src/screens/Main';
import { styles } from './src/theme/appTheme';
import { useColorScheme } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { handleTheme } from './src/theme/handleTheme';
import { ThemeContext } from './src/context/ThemeContext';


export default function App() {

  const [dark, setDark] = useState(false);


  const {darkTheme,lightTheme} = handleTheme()

  const scheme = useColorScheme()

  return (
    <PaperProvider theme={dark === true ? darkTheme : lightTheme}>
      <ThemeContext.Provider value={{dark,setDark}}>
        <View style={{flex:1}}>
          <StatusBar translucent={false} style={'light'}/>
          <Main/>
        </View>
      </ThemeContext.Provider>
    </PaperProvider>
  );
}


