import { StyleSheet} from "react-native";
import { scale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    viewToggle:{
        flex: 0.08,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#E0E0E0',
        elevation: scale(5)

    },
    viewTexto:{
        flex:0.08,
        alignItems:'center',
        justifyContent:'flex-end',
    },
    textonormal:{
        fontFamily: 'SecularOne_400Regular',
        fontSize: scale(15),
    },
    viewFecha:{
        flex: 0.3,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    columnaFecha: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        //margin:'0.2%'
    },
    textoFecha:{
        fontSize: scale(27),
        width:    scale(70),
        fontFamily:'SecularOne_400Regular',
        textAlign:'center'
        
    },
    viewDia:{
        flex:0.16,
        justifyContent:'center',
        alignItems:'center'
    },
    textoDia:{
        fontSize:scale(60),
        fontFamily:'SourceSansPro_600SemiBold',
    },
    viewBoton:{
        flex:0.23,
        alignItems:'center',
        justifyContent:'center'
    },
    touchRes:{
        backgroundColor:'#C41E3A',
        padding: scale(15),
        borderRadius:scale(10),

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: scale(13),
    },
    textoBoton:{
        fontFamily:'SecularOne_400Regular',
        textAlign:'center',
        fontSize: scale(15),
        color:'white'

    }

})