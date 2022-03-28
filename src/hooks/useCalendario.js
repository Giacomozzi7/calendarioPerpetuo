import React, { useState } from 'react'

export const useCalendario = () => {
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
        6:'Sábado'
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

    //Validacion maximos y minimos mes y year
    if(date['mes'] > 11){ setDate({...date,mes: 0}) }
    if(date['mes'] < 0) { setDate({...date,mes: 11}) }
    if(date['year'] > 9999){ setDate({...date,year: 1000}) }


    //Detiene el timer en onLongPress
    const stopTimer = () => {
        clearTimeout(timer);
     }

    //Modificador de fecha con onPress y onLongPress
    var modFecha = (numsigno,tipo,velo,hold) =>{
        setDate(prev => ({
            ...date,
            //Evita que el hold del boton decremente year por debajo de 1000
            [tipo]: tipo ==='year' & prev[tipo] <= 1000 & numsigno < 1
                ? prev[tipo]
                : prev[tipo] + numsigno 
                }))
        //Si el boton se esta presionando (hold), llama nuevamente a la funcion mediante timer
        hold && (timer = setTimeout(() => {modFecha(numsigno,tipo,velo,true)},velo))

    };

    //Funcion para reestablecer fecha con el boton
    const resetFecha = () =>{
        setDate({
            ...date,
            dia:  hoy.getDate(),
            mes:  hoy.getMonth(),
            year: hoy.getFullYear()       
        })

    }


    return{
        date,
        setDate,
        weekDays,
        monthsYear,
        diaSemana,
        modFecha,
        stopTimer,
        resetFecha
    }
}
