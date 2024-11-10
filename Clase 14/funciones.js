// Funciones 

/*Definicion Tradicional 
Sintaxis 
    function nombre () {
        acciones/insturcciones a ejecutar
    }
*/

function calificarAlumno(){
    let nota1=parseInt(prompt("Ingrese la 1ra calificacion"))
    let nota2=parseInt(prompt("Ingrese la 2da calificacion"))
    let nota3=parseInt(prompt("Ingrese la 3ra calificacion"))

    let calificacion = (nota1+nota2+nota3)/3; 
    if (calificacion>=7){
        console.log("Promocionado")
    } else {
        if (calificacion>=4)
        console.log("Regular")
        else {
        console.log("Reprobado")
        }
    }  
}

/* 
Definicion Felcha ->arrow function

()=> {
    acciones/ instruccion a ejecutar
}
*/

// ejecutar la funcion o invocar la funcion 

calificarAlumno()