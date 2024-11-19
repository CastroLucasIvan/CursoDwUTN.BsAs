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

// ejecutar la funcion o invocar la funcion 
saludar(prompt("ingrese un nombre"),prompt("ingrese su apellido"));

let listaAlumno=[]

function agregarAlumno(alumno){
    listaAlumno.push(alumno)
}

// return : Declaracion que se le puede colocar a una funcion
function sumaDosNumeros(num1,num2){
    let suma =num1 + num2
    return suma
}

function promedioDosNumeros (total){
    console.log(total/2)
}

let respuesta = sumaDosNumeros(4,5)

promedioDosNumeros(respuesta)



/* 
Definicion Felcha ->arrow function

()=> {
    acciones/ instruccion a ejecutar
}
*/
const sumaDos=(num1,num2)=>{
    resultado=num1+num2
    return resultado
};