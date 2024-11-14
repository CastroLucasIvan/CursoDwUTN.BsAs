// Funciones 

/*Definicion Tradicional 
Sintaxis 
    function nombre (parametros) {
        acciones/insturcciones a ejecutar
    }
*/
// PARAMETROS: permite ejecutar una misma funcion con diferente resultado 
function saludar(nombre,apellido){
    console.log("Hola "+ nombre+" "+apellido);
}

/* 
Definicion Felcha ->arrow function

()=> {
    acciones/ instruccion a ejecutar
}
*/

// ejecutar la funcion o invocar la funcion 
let datoNombre=prompt("ingrese un nombre")
let datoApellido=prompt("ingrese su apellido")
saludar(datoNombre,datoApellido);