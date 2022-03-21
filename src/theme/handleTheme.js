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
          textoFecha: '#C41E3A',
          botonBack: '#C41E3A',
          flecha: '#000000',
          textoDia:{
            color:'#454545',
            //textShadowColor: '#424242',
            //textShadowOffset: {width: 1, height: 1},
            //textShadowRadius: 1
          }
        },
      };
      
    const darkTheme = {
        ...DefaultTheme,
        roundness: 2,
        colors: {
          ...DefaultTheme.colors,
          containerBack: '#121212',
          headerBack: "#161616",
          textoNormal: '#c0c0c0',
          tituloHeader: '#e1e1e1',
          textoFecha: '#5559cc',
          botonBack: '#5559cc',
          flecha: '#3f4040',
          textoDia:{
            color:'#c0c0c0',
            //textShadowColor: '#303030',
            //textShadowOffset: {width: 1, height: 3},
            //textShadowRadius: 1
          }

        },
    };


    return {
        darkTheme,
        lightTheme
    }
}
