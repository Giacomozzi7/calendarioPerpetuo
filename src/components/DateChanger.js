import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { MaterialIcons } from '@expo/vector-icons';


export const DateChanger = ({tipo,velo, date, monthsYear, stopTimer, tapFecha, modFecha}) => {

  return (
    <View style={styles.columnaFecha}>
        <TouchableOpacity onLongPress={() => modFecha(1,tipo,velo)} onPressOut={stopTimer} delayLongPress={130} onPress ={() => tapFecha(1,tipo)}>
            <MaterialIcons name="arrow-forward-ios" size={60} color="black" style={{transform: [{ rotate: "-90deg" }]}}  />
        </TouchableOpacity>

        { 
            tipo == 'mes' 
                ? <Text style={styles.textoFecha}>{monthsYear[date[tipo]]}</Text> 
                : <Text style={styles.textoFecha}>{date[tipo]}</Text>
        }
        
        <TouchableOpacity onLongPress={() => modFecha(-1,tipo,velo)} onPressOut={stopTimer} delayLongPress={130} onPress ={() => tapFecha(-1,tipo)}>
            <MaterialIcons name="arrow-forward-ios" size={60} color="black" style={{transform: [{ rotate: "90deg" }]}}  />
        </TouchableOpacity>
    </View> 
    
  )
}
