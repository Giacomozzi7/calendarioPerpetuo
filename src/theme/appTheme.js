import { StyleSheet } from "react-native";

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
        elevation:5

    },
    viewTexto:{
        flex:0.08,
        alignItems:'center',
        justifyContent:'flex-end',
    },
    textonormal:{
        fontFamily: 'SecularOne_400Regular',
        fontSize: 18,
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
        margin:'2%'
    },
    textoFecha:{
        fontSize:30,
        fontFamily:'SecularOne_400Regular',
    },
    viewDia:{
        flex:0.16,
        justifyContent:'center',
        alignItems:'center',
    },
    textoDia:{
        fontSize:60,
        fontFamily:'SourceSansPro_600SemiBold',

    },
    viewBoton:{
        flex:0.23,
        alignItems:'center',
        justifyContent:'center'
    },
    touchRes:{
        backgroundColor:'#C41E3A',
        padding:14,
        borderRadius:5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    }

})