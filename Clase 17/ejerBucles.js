
/*
Dado el siguiente array de países, crear un programa que le pida al usuario ingresar un
nombre de país.
Luego,la funcion deberá fijarse si el país ingresado se encuentra en la lista creada a
continuacion, ;
- En caso que se encuentre, devolver un alert que diga “Pais ya registrado, se elimina del
registro” y sacarlo de la lista;
- En caso que no se encuentre en la lista, deberá devolver un alert que indique “Pais
registrado” y agregue dicho país a la lista.

*/


let paises=["Argentina","Peru","Bolivia","Italia","Australia"]

function nombrePais1() {
    let paisNuevo = prompt ("Ingrese nombre de pais") 
    let paisEncontrado = false;
    for(let pais of paises) {

       if( paisNuevo === pais ) {
         paisEncontrado = true 
        }
    }
if (paisEncontrado === true) {
    alert("Pais registrado, se elimina de la lista")
    let indicePais = paises.indexOf(paisNuevo) // ubico el indice del pais
    paises.splice(indicePais,1)// busco el pais y lo saco 
} else {
    alert("Pais NO registrado, se agrega a la lista")
    paises.push(paisNuevo)
}
}

nombrePais1()
console.log(paises)

// -------------- alternativa con find() ------------------------
/* function nombrePais2(){ 
let paisEncontrado= paises.find((pais)=>{return paisNuevo === pais});

}; */

//------------------------------------------------------------------------------------------------------------------------------------------------





/* Hacer una función que al ingresar el día de la semana y el estado del tiempo (el cual puede ser lluvioso o despejado) nos devuelva:

Si es un sábado lluvioso, el mensaje "Me quedo en casa".
Sino, mostrar el mensaje "Salgo a pasear". */

const evaluarClima=()=>{
    let dia = prompt("Indique el dia de semana")
    let tiempo=prompt("Indique si el clima es lluvioso o despejado")
    dia === "Sabado" && tiempo === "Lluvioso"? console.log("Me quedo en casa"): console.log("Salgo a pasear")
}

evaluarClima()