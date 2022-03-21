import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, ScrollView} from 'react-native'
import AppLoading from 'expo-app-loading';
import { styles } from '../theme/appTheme';
import { Header } from '../components/Header';
import { useCalendario } from '../hooks/useCalendario';
import { DateChanger } from '../components/DateChanger';
import { ThemeContext } from '../context/ThemeContext';
import { MaterialIcons } from '@expo/vector-icons';

//Fuentes de Google
import { useFonts, SecularOne_400Regular } from '@expo-google-fonts/secular-one';
import { SourceSansPro_600SemiBold, SourceSansPro_700Bold} from '@expo-google-fonts/source-sans-pro';
import { SawarabiMincho_400Regular } from '@expo-google-fonts/sawarabi-mincho';
import { KeyboardAvoidingView } from 'react-native';



export const Main = () => {
    let [fontsLoaded] = useFonts({
        SecularOne_400Regular,
        SourceSansPro_600SemiBold,
        SourceSansPro_700Bold,
        SawarabiMincho_400Regular

    })

    //Extrae el tema y variables de useCalendario
    const { scheme } = useContext(ThemeContext);
    const {date,diaSemana,weekDays,monthsYear,modFecha,stopTimer,resetFecha, setDate}  = useCalendario()
    const colores = scheme.colors
    
    if (!fontsLoaded) {
        return <AppLoading />;
    }

    else{
        return (
            <View style={{...styles.container, backgroundColor: colores.containerBack}}>
                <Header/>

                <View style={styles.viewTexto}>
                    <Text style={{...styles.textonormal, color: colores.textoNormal}}>Tap en año para modificar manualmente</Text>
                </View>

                

                <View style={styles.viewFecha}>
                    <DateChanger tipo={'dia'} velo={40} date={date} monthsYear={monthsYear} stopTimer={stopTimer} modFecha={modFecha} setDate={setDate}/>
                    <DateChanger tipo={'mes'} velo={70} date={date} monthsYear={monthsYear} stopTimer={stopTimer} modFecha={modFecha} setDate={setDate}/>
                    <DateChanger tipo={'year'} velo={1} date={date} monthsYear={monthsYear} stopTimer={stopTimer} modFecha={modFecha} setDate={setDate}/>  
                </View>

                <View style={styles.viewDia}>
                    { date['year'] > 999
                        ? <Text style={{...styles.textoDia, ...colores.textoDia}}>{weekDays[diaSemana]}</Text>
                        : <>
                            <MaterialIcons name="error" size={40} color={'#ffcc00'} style={{marginBottom:'2%'}} />
                            <Text style={{...styles.textonormal, color: colores.textoNormal}}>Se debe ingresar un año de 4 dígitos</Text>
                        </>
                    }
                </View>

                <View style={styles.viewBoton}>
                    <TouchableOpacity style={{...styles.touchRes, backgroundColor: colores.botonBack}} onPress = {resetFecha}><Text style={{...styles.textoFecha,fontSize:18, color:'white'}}>Reestablecer</Text></TouchableOpacity>
                </View>

            </View>
            
        )
    }
}
