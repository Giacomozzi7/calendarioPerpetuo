import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { View,useWindowDimensions} from 'react-native';
import { Main } from './src/screens/Main';
import { handleTheme } from './src/theme/handleTheme';
import { ThemeContext } from './src/context/ThemeContext';
import { useColorScheme } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';


export default function App() {

  const colorScheme = useColorScheme();
  const windowHeight = useWindowDimensions().height;

  const [dark, setDark] = useState(colorScheme === 'dark' ? true : false);


  const {darkTheme,lightTheme} = handleTheme()

  dark 
    ? scheme = darkTheme 
    : scheme = lightTheme

  return (
 
      <ThemeContext.Provider value={{dark,setDark, scheme}}>
        <View style={{ flex: 1 , minHeight: Math.round(windowHeight)}}>
            <StatusBar translucent={false} style={'light'}/>
            <Main/>  
        </View> 
      </ThemeContext.Provider>


  );
}


