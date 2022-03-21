import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { View , Text} from 'react-native';
import { Main } from './src/screens/Main';
import { handleTheme } from './src/theme/handleTheme';
import { ThemeContext } from './src/context/ThemeContext';
import { useColorScheme } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';



export default function App() {

  const colorScheme = useColorScheme();

  const [dark, setDark] = useState(colorScheme === 'dark' ? true : false);


  const {darkTheme,lightTheme} = handleTheme()

  dark 
    ? scheme = darkTheme 
    : scheme = lightTheme

  return (
    <KeyboardAvoidingView style={{flex:1}} enabled={false}>
      <ThemeContext.Provider value={{dark,setDark, scheme}}>   
            <StatusBar translucent={false} style={'light'}/>
            <Main/>   
      </ThemeContext.Provider>
    </KeyboardAvoidingView>

  );
}


