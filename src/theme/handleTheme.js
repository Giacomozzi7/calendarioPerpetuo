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
          textoNormal: '#454545',
          tituloHeader: '#000000',
          textoFecha: '#BF0600',
          botonBack: '#BF0600',
          flecha: '#000000',
          textoDia:'#BF0600',


        },
      };
      
    const darkTheme = {
        ...DefaultTheme,
        roundness: 2,
        colors: {
          ...DefaultTheme.colors,
          containerBack: '#121212',
          headerBack: "#161616",
          textoNormal: '#dcdcdc',
          tituloHeader: '#dcdcdc',
          textoFecha: '#5559cc',
          botonBack: '#5559cc',
          flecha: '#3f4040',
          textoDia:'#5559cc',
        },
    };


    return {
        darkTheme,
        lightTheme
    }
}
