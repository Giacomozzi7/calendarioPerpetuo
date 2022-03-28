import React, {useContext} from 'react'
import { Text, TouchableOpacity, View, TextInput} from 'react-native'
import { scale} from 'react-native-size-matters';
import { styles } from '../theme/appTheme'
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeContext } from '../context/ThemeContext';


export const DateChanger = ({tipo,velo, date, monthsYear, stopTimer, modFecha,setDate}) => {

  const { scheme } = useContext(ThemeContext);
  const colores = scheme.colors

  //Valida que year sea un entero mayor que 0, sino regresa cadena vacia
  const onChangeYear = (year) =>{
    Number.isInteger(parseInt(year)) & year > 0
      ? setDate({...date,year: parseInt(year)})
      : setDate({...date,year: ''})
  }
  
  return (
    <View style={styles.columnaFecha}>
        {/* Boton Superior */}
        <TouchableOpacity 
          onLongPress={() => date[tipo].toString() != '' && modFecha(1,tipo,velo,true)} 
          onPressOut={stopTimer} 
          delayLongPress={150} 
          onPress ={() => {date[tipo].toString() != '' && modFecha(1,tipo,velo,false)}}>
            <MaterialIcons name="arrow-forward-ios" size={scale(53)} color= {colores.flecha} style={{transform: [{ rotate: "-90deg" }]}}  />
        </TouchableOpacity>

         

          { 
            tipo == 'mes' 
              ? <Text style={{...styles.textoFecha, color: colores.textoFecha}}>{monthsYear[date[tipo]]}</Text> 
              : tipo == 'year'
                ? <TextInput 
                   style={{...styles.textoFecha, color: colores.textoFecha}} 
                    onChangeText={(year) => onChangeYear(year) } 
                    value={date[tipo].toString()} 
                    maxLength={4} 
                    keyboardType='number-pad' 
                    selectTextOnFocus={true} />
                : <Text style={{...styles.textoFecha, color: colores.textoFecha}}>{date[tipo]}</Text>
          }
        
        {/* Boton Inferior */}
        <TouchableOpacity 
          onLongPress={() => modFecha(-1,tipo,velo,true)} 
          onPressOut={stopTimer} 
          delayLongPress={150} 
          onPress ={() => modFecha(-1,tipo,velo,false)}>
            <MaterialIcons name="arrow-forward-ios" size={scale(53)} color= {colores.flecha} style={{transform: [{ rotate: "90deg" }]}}  />
        </TouchableOpacity>
    </View> 
    
  )
}
