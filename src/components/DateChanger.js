import React, {useContext} from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeContext } from '../context/ThemeContext';


export const DateChanger = ({tipo,velo, date, monthsYear, stopTimer, tapFecha, modFecha}) => {

  const { scheme } = useContext(ThemeContext);
  const colores = scheme.colors

  return (
    <View style={styles.columnaFecha}>
        <TouchableOpacity onLongPress={() => modFecha(1,tipo,velo)} onPressOut={stopTimer} delayLongPress={130} onPress ={() => tapFecha(1,tipo)}>
            <MaterialIcons name="arrow-forward-ios" size={60} color= {colores.flecha} style={{transform: [{ rotate: "-90deg" }]}}  />
        </TouchableOpacity>

        { 
            tipo == 'mes' 
                ? <Text style={{...styles.textoFecha, color: colores.textoFecha}}>{monthsYear[date[tipo]]}</Text> 
                : <Text style={{...styles.textoFecha, color: colores.textoFecha}}>{date[tipo]}</Text>
        }
        
        <TouchableOpacity onLongPress={() => modFecha(-1,tipo,velo)} onPressOut={stopTimer} delayLongPress={130} onPress ={() => tapFecha(-1,tipo)}>
            <MaterialIcons name="arrow-forward-ios" size={60} color= {colores.flecha} style={{transform: [{ rotate: "90deg" }]}}  />
        </TouchableOpacity>
    </View> 
    
  )
}
