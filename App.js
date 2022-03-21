import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { View } from 'react-native';
import { Main } from './src/screens/Main';
import { handleTheme } from './src/theme/handleTheme';
import { ThemeContext } from './src/context/ThemeContext';


export default function App() {

  const [dark, setDark] = useState(false);


  const {darkTheme,lightTheme} = handleTheme()

  dark 
    ? scheme = darkTheme 
    : scheme = lightTheme

  return (
    <ThemeContext.Provider value={{dark,setDark, scheme}}>
      <View style={{flex:1}}>
        <StatusBar translucent={false} style={'light'}/>
        <Main/>
      </View>
    </ThemeContext.Provider>

  );
}


