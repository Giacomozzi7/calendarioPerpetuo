import React, { useState } from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
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

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    else{
        return (
            <View style={{flex:1}}>
                <Header/>

                <View style={styles.viewTexto}>
                    <Text style={styles.textonormal}>Tap en año para modificar manualmente</Text>
                </View>

                <View style={styles.viewFecha}>
                    <View style={styles.columnaFecha}>
                        <TouchableOpacity>
                            <MaterialIcons name="arrow-forward-ios" size={60} color="black" style={{transform: [{ rotate: "-90deg" }]}}  />
                        </TouchableOpacity>
                        <Text style={styles.textoFecha}>13</Text>
                        <TouchableOpacity>
                            <MaterialIcons name="arrow-forward-ios" size={60} color="black" style={{transform: [{ rotate: "90deg" }]}}  />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.columnaFecha}>
                        <TouchableOpacity>
                            <MaterialIcons name="arrow-forward-ios" size={60} color="black" style={{transform: [{ rotate: "-90deg" }]}}  />
                        </TouchableOpacity>
                        <Text style={styles.textoFecha}>Mar</Text>
                        <TouchableOpacity>
                            <MaterialIcons name="arrow-forward-ios" size={60} color="black" style={{transform: [{ rotate: "90deg" }]}}  />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.columnaFecha}>
                        <TouchableOpacity>
                            <MaterialIcons name="arrow-forward-ios" size={60} color="black" style={{transform: [{ rotate: "-90deg" }]}}  />
                        </TouchableOpacity>
                        <Text style={styles.textoFecha}>2022</Text>
                        <TouchableOpacity>
                            <MaterialIcons name="arrow-forward-ios" size={60} color="black" style={{transform: [{ rotate: "90deg" }]}}  />
                        </TouchableOpacity>
                    </View>    
                </View>

                <View style={styles.viewDia}>
                    <Text style={styles.textoDia}>Domingo</Text>
                </View>

                <View style={styles.viewBoton}>
                    <TouchableOpacity style={styles.touchRes}><Text style={{...styles.textoFecha,fontSize:18, color:'white'}}>Reestablecer</Text></TouchableOpacity>
                </View>

            </View>
            
        )
    }
}
