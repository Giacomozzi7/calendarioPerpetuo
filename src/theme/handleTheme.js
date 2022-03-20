import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

export const handleTheme = () => {
    const lightTheme = {
        ...DefaultTheme,
        roundness: 2,
        colors: {
          ...DefaultTheme.colors,
          containerBack: '#f7f7f7',
          headerBack: "#FAFAFA",
          textoNormal: '#545454',
          textoFecha: '#C41E3A',
          textoDia: '#545454',
          botonBack: '#C41E3A'
        },
      };
      
    const darkTheme = {
        ...DefaultTheme,
        roundness: 2,
        colors: {
          ...DefaultTheme.colors,
          containerBack: '#000000',
          headerBack: "#FAFAFA",
          textoNormal: '#ffffff',
          textoFecha: '#C41E3A',
          textoDia: '#545454',
          botonBack: '#C41E3A'
        },
    };


    return {
        darkTheme,
        lightTheme
    }
}
