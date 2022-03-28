import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React, { useState , useEffect} from 'react'
import { View,useWindowDimensions, SafeAreaView} from 'react-native';
import { Main } from './src/screens/Main';
import { handleTheme } from './src/theme/handleTheme';
import { ThemeContext } from './src/context/ThemeContext';
import { useColorScheme, StatusBar, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const MY_STORAGE_KEY = '@theme-status:value'

export default function App() {
  
  //Importante: setea modo claro u oscuro la primera vez que se inicia
  // Para ello intenta acceder a la variable MY_STORAGE_KEY que contiene el ultimo estado del tema de la aplicacion
  // Si se inicia por primera vez, pone el tema claro por defecto
  const [dark, setDark] = useState(async() =>{
    const storageSample = await AsyncStorage.getItem(MY_STORAGE_KEY)
    if (storageSample != null){
      storageSample ==='claro' ? setDark(false) : setDark(true)
    }
    else {setDark(false)}
  }); 

  const setGlobalTheme = async () =>{
    await AsyncStorage.setItem( MY_STORAGE_KEY,  dark ? 'oscuro' : 'claro')
  }

  const colorScheme = useColorScheme();
  const windowHeight = useWindowDimensions().height;
  const {darkTheme,lightTheme} = handleTheme()
  setGlobalTheme()

  dark
     ? scheme = darkTheme 
     : scheme = lightTheme

  return (
      // marginTop: StatusBar.currentHeight
      <ThemeContext.Provider value={{dark,setDark, scheme}}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar 
            barStyle='light-content'
          />
          <Main/>  
        </SafeAreaView> 
      </ThemeContext.Provider>


  );
}


