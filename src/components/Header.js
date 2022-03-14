import React, { useState } from 'react'
import {  Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import Switch from 'expo-dark-mode-switch';
import { MaterialIcons } from '@expo/vector-icons';


export const Header = () => {

    const [dark, setDark] = useState(false)

    return (
        <View style = {styles.viewToggle}>
                    <View style={{flexDirection:'row', alignItems:'center', marginLeft:'2%'}}>
                        <MaterialIcons name="calendar-today" size={40} color="#C41E3A" />
                        <Text style={{...styles.textonormal, fontSize:16, marginLeft:'2%',marginTop:'1%', color:'black'}}>Calendario Perpetuo</Text>
                    </View>
                    <Switch value={dark} onChange={dark => setDark(dark)} style={{marginRight:'2%'}}/>
        </View>
    )
}
