import React, { useContext } from 'react'
import {  Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import Switch from 'expo-dark-mode-switch';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeContext } from '../context/ThemeContext';


export const Header = () => {

    const { dark, setDark,scheme } = useContext(ThemeContext);
    const colores = scheme.colors

    return (
        <View style = {{...styles.viewToggle, backgroundColor: colores.headerBack}}>
                    <View style={{flexDirection:'row', alignItems:'center', marginLeft:'2%'}}>
                        <MaterialIcons name="calendar-today" size={40} color={colores.botonBack} />
                        <Text style={{...styles.textonormal, color: colores.tituloHeader, fontSize:16, marginLeft:'3%',marginTop:'2%'}}>Calendario Perpetuo</Text>
                    </View>
                    <Switch value={dark} onChange={dark => setDark(dark)} style={{marginRight:'2%'}}/>
        </View>

    )

}


