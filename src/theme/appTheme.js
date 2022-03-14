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

    },
    viewTexto:{
        flex:0.08,
        alignItems:'center',
        justifyContent:'flex-end',
        //backgroundColor:'yellow'
    },
    textonormal:{
        fontFamily: 'SecularOne_400Regular',
        fontSize: 18,
        color:'#545454'
    },
    viewFecha:{
        flex: 0.25,
        flexDirection:'row',
        //backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        //backgroundColor:'#E8E8E8'

    },
    columnaFecha: {
        flexDirection:'column',
        alignItems:'center',
        margin:'2%'
    },
    textoFecha:{
        fontSize:30,
        fontFamily:'SecularOne_400Regular',
        color:'#C41E3A'
    },
    viewDia:{
        flex:0.25,
        //backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
    },
    textoDia:{
        fontSize:60,
        fontFamily:'SawarabiMincho_400Regular',
        color:'#545454',
        textShadowColor: '#DADADA',
        textShadowOffset: {width: 2, height: 3},
        textShadowRadius: 1
    },
    viewBoton:{
        flex:0.16,
        //backgroundColor:'purple',
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