import React, { useRef, useState } from 'react'
import { View, Text, Pressable, TouchableOpacity} from 'react-native'
import AppLoading from 'expo-app-loading';
import { useFonts, SecularOne_400Regular } from '@expo-google-fonts/secular-one';
import { SourceSansPro_600SemiBold, SourceSansPro_700Bold} from '@expo-google-fonts/source-sans-pro';
import { SawarabiMincho_400Regular } from '@expo-google-fonts/sawarabi-mincho';
import { styles } from '../theme/appTheme';
import { Header } from '../components/Header';
import { useCalendario } from '../hooks/useCalendario';
import { DateChanger } from '../components/DateChanger';



export const Main = () => {
    let [fontsLoaded] = useFonts({
        SecularOne_400Regular,
        SourceSansPro_600SemiBold,
        SourceSansPro_700Bold,
        SawarabiMincho_400Regular

    })

    const [dark, setDark] = useState(false)
    const {date,diaSemana,weekDays,monthsYear,modFecha,tapFecha,stopTimer,resetFecha}  = useCalendario()

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    else{
        return (
            <View style={styles.container}>
                <Header/>

                <View style={styles.viewTexto}>
                    <Text style={styles.textonormal}>Tap en año para modificar manualmente</Text>
                </View>

                <View style={styles.viewFecha}>
                    <DateChanger tipo={'dia'} velo={40} date={date} monthsYear={monthsYear} stopTimer={stopTimer} tapFecha={tapFecha} modFecha={modFecha}/>
                    <DateChanger tipo={'mes'} velo={70} date={date} monthsYear={monthsYear} stopTimer={stopTimer} tapFecha={tapFecha} modFecha={modFecha}/>
                    <DateChanger tipo={'year'} velo={1} date={date} monthsYear={monthsYear} stopTimer={stopTimer} tapFecha={tapFecha} modFecha={modFecha}/>  
                </View>

                <View style={styles.viewDia}>
                    <Text style={styles.textoDia}>{weekDays[diaSemana]}</Text>
                </View>

                <View style={styles.viewBoton}>
                    <TouchableOpacity style={styles.touchRes} onPress = {resetFecha}><Text style={{...styles.textoFecha,fontSize:18, color:'white'}}>Reestablecer</Text></TouchableOpacity>
                </View>

            </View>
            
        )
    }
}
