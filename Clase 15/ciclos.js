
// ciclos , bucles : permite iterar 
// for | for-of | while | do-while
// forEach map()| filter()| find() --> exclusivo de java
let lista = ["Marta","Susana", "Ramon"]
/*

for(inicial;condicion;accionPorVuelta){
    acciones a repetir
}

    inicial = accion antes de comenzar el bucle
    condiion= bool que indica cuando tiene que comenzar y cuando terminar (se puede colocar operaciones)

    accionPorVuelta: accion que se repite cada vez que termine todo lo que tiene entre corchetes
*/
// Forma de actuar: se fija si cumple esta accion "i<lista.length" realiza lo del corchete y por utlimo repite la accion por vuelta

for(let i=0;i<lista.length;i=i+1) {
    console.log("Hola "+ lista[i])
}

let importe = [2+4+5+8+9]
let total=0

for(let i=0;i<importe.length;i++) {
    total=total +importe[i]
}
console.log(total)

for(let nombre=prompt("Agregue un nombre");nombre !== "fin";nombre=prompt("Agregue otro nombre o fi para terminar")){
    lista.push(nombre)
}
console.log(lista)

/*
for-of---> solo sirve con listas y recorre todo el array 
for(let ref of array){
    acciones
}
*/

let total2= 0;

for(let item of importe){
    total2=total2+item
}
console.log(total2)