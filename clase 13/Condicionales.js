

// Condicionales (son 3)

/* 1 OPERADOR TERNARIO

Estructuria en usa solo linea de codigo
Indicarle una accion si se cumple o no la accion
Condicion? accion-true : accion-false
ej:
*/
//                condicion ?               accion-true                                accion:false
edad>=16 && ticketDisponible === true ? console.log("se puede vender entradas") : console.log("No se puede vender entradas")

edad>= 16 ? ticketDisponible === true ? console.log("Se puede vender entrada") : console.log("no hay entradas") : console.log("Es menor de edad")


// 2 IF ELSE 
// si queiro puedo usar solo la seccion if
if(edad>=16){
    console.log("Es mayor de edad")
} else {
    console.log("Es menor de edad")
}

//----------------------------------------------------------------------------------------


if(edad>=16){
    console.log("Es mayor de edad")
    if(ticketDisponible === true){
        console.log("Se puede vender entrada")
    }else {
        console.log("No se puede vender entrada")
    }
} else {
    console.log("Es menor de edad")
}

// quier saber si compra mas de 5 productoas para hacerle un descuento de 1000p
let cantidadProductos=5;
let totalPAgar=3000; 
if (cantidadProductos>4) {
    totalPAgar=totalPAgar-1000
}
console.log("total a pagar" + totalPAgar)
// 3 SWITCH 
// NO evalua si es true o false evalua la condicion
/* Sintaxis

switch (expreion) {
    case value: <-- casos a evaluar
        break; <-- termina el caso
    default:
        break;
} */

let diaDeLaSemana= prompt("ingrese que dia es").toLocaleLowerCase()
//por medio de un pormpt un dia de la semana y a ese string con el lowerCase transformarlo todo en minuscula

switch (diaDeLaSemana) {
    case "lunes": 
        console.log("Descuento 5%")
    break;

    case "martes": 
        console.log("Descuento 5%")
    break;

    case "miercoles": 
        console.log("Descuento 5%")
    break;

    case "jueves": 
        console.log("Descuento 5%")
    break;

    case "viernes": 
        console.log("Descuento 5%")
    break;



    default: 
        console.log("No hay descuentos los fin de semana")
}

// 1:13:00 