import React, { useRef, useState } from 'react'
import { View, Text, Pressable, TouchableOpacity} from 'react-native'
import AppLoading from 'expo-app-loading';
import { useFonts, SecularOne_400Regular } from '@expo-google-fonts/secular-one';
import { SourceSansPro_600SemiBold, SourceSansPro_700Bold} from '@expo-google-fonts/source-sans-pro';
import { SawarabiMincho_400Regular } from '@expo-google-fonts/sawarabi-mincho';
import { styles } from '../theme/appTheme';
import { MaterialIcons } from '@expo/vector-icons';
import { Header } from '../components/Header';



export const Main = () => {
    let [fontsLoaded] = useFonts({
        SecularOne_400Regular,
        SourceSansPro_600SemiBold,
        SourceSansPro_700Bold,
        SawarabiMincho_400Regular

    })

    const [dark, setDark] = useState(false)

    const hoy = new Date();
    const [date, setDate] = useState({
        dia:  hoy.getDate(),
        mes:  hoy.getMonth(),
        year: hoy.getFullYear()
    })

    var weekDays = {
        0:'Domingo',
        1:'Lunes',
        2:'Martes',
        3:'Miércoles',
        4:'Jueves',
        5:'Viernes',
        6:'Sabado'
    }

    var monthsYear = {
        0:  'Ene',
        1:  'Feb',
        2:  'Mar',
        3:  'Abr',
        4:  'May',
        5:  'Jun',
        6:  'Jul',
        7:  'Ago',
        8:  'Sep',
        9:  'Oct',
        10: 'Nov',
        11: 'Dic'
    }

    //Obtiene dia de la semana
    var fecha = new Date(parseInt(date['year']),date['mes'],date['dia']);
    var diaSemana = fecha.getDay()


    timer = null;

    //Validacion febrero
    if (date['mes'] === 1){
        if(date['year'] % 400 === 0 || (date['year'] % 4 == 0 && date['year'] % 100 != 0)){ //bisiesto
            if (date['dia'] > 29){ setDate({...date,dia: 1}) }
            if (date['dia'] < 1) { setDate({...date,dia: 29}) }
        }
        else{
            if (date['dia'] > 28){ setDate({...date,dia: 1}) }
            if (date['dia'] < 1) { setDate({...date,dia: 28}) }
        }
    }
    else{
        //Validacion resto de meses
        if (date['mes'] === 3 || date['mes'] === 5 || date['mes'] === 8 || date['mes'] === 10){
            if (date['dia'] > 30){ setDate({...date,dia: 1}) }
            if (date['dia'] < 1) { setDate({...date,dia: 30}) }
        }
        else{
            if (date['dia'] > 31){ setDate({...date,dia: 1}) }
            if (date['dia'] < 1) { setDate({...date,dia: 31}) }
        }
        
    }

    if(date['mes'] > 11){date['mes'] = 0}
    if(date['mes'] < 0) {date['mes'] = 11}



    //Timer OnLongPress
    var modFecha = (numsigno,tipo,velo) =>{
        setDate(prev => ({...date, [tipo]: prev[tipo] + numsigno}))
        timer = setTimeout(() => {modFecha(numsigno,tipo,velo)},velo);
    };

    var tapFecha = (numsigno,tipo) =>{
        setDate({...date, [tipo]: date[tipo] + numsigno})
    }

    const stopTimer = () => {
       clearTimeout(timer);
    }


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
                    <View style={styles.columnaFecha}>
                        <TouchableOpacity onLongPress={() => modFecha(1,'dia',40)} onPressOut={() => stopTimer()} delayLongPress={130} onPress ={() => tapFecha(1,'dia')}>
                            <MaterialIcons name="arrow-forward-ios" size={60} color="black" style={{transform: [{ rotate: "-90deg" }]}}  />
                        </TouchableOpacity>
                        <Text style={styles.textoFecha}>{date['dia']}</Text>
                        <TouchableOpacity onLongPress={() => modFecha(-1,'dia',40)} onPressOut={() => stopTimer()} delayLongPress={130} onPress ={() => tapFecha(-1,'dia')}>
                            <MaterialIcons name="arrow-forward-ios" size={60} color="black" style={{transform: [{ rotate: "90deg" }]}}  />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.columnaFecha}>
                        <TouchableOpacity onLongPress={() => modFecha(1,'mes',70)} onPressOut={() => stopTimer()} delayLongPress={130} onPress ={() => tapFecha(1,'mes')}>
                            <MaterialIcons name="arrow-forward-ios" size={60} color="black" style={{transform: [{ rotate: "-90deg" }]}}  />
                        </TouchableOpacity>
                        <Text style={styles.textoFecha}>{monthsYear[date['mes']]}</Text>
                        <TouchableOpacity onLongPress={() => modFecha(-1,'mes',70)} onPressOut={() => stopTimer()} delayLongPress={130} onPress ={() => tapFecha(-1,'mes')}>
                            <MaterialIcons name="arrow-forward-ios" size={60} color="black" style={{transform: [{ rotate: "90deg" }]}}  />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.columnaFecha}>
                        <TouchableOpacity onLongPress={() => modFecha(1,'year',1)} onPressOut={() => stopTimer()} delayLongPress={130} onPress ={() => tapFecha(1,'year')}>
                            <MaterialIcons name="arrow-forward-ios" size={60} color="black" style={{transform: [{ rotate: "-90deg" }]}}  />
                        </TouchableOpacity>
                        <Text style={styles.textoFecha}>{date['year']}</Text>
                        <TouchableOpacity onLongPress={() => modFecha(-1,'year',1)} onPressOut={() => stopTimer()} delayLongPress={130} onPress ={() => tapFecha(-1,'year')}>
                            <MaterialIcons name="arrow-forward-ios" size={60} color="black" style={{transform: [{ rotate: "90deg" }]}}  />
                        </TouchableOpacity>
                    </View>    
                </View>

                <View style={styles.viewDia}>
                    <Text style={styles.textoDia}>{weekDays[diaSemana]}</Text>
                </View>

                <View style={styles.viewBoton}>
                    <Pressable style={styles.touchRes}><Text style={{...styles.textoFecha,fontSize:18, color:'white'}}>Reestablecer</Text></Pressable>
                </View>

            </View>
            
        )
    }
}
