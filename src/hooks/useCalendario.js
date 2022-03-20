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
        tapFecha,
        stopTimer,
        resetFecha
    }
}
