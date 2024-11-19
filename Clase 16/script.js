//arrays  grupo de datos
// para alterar lista metodos: 
// length -> cantidad de datos que contiene una lista
// push() -unshift() -> agregar elementos al final o al principio
// pop() - shift() -> quitar elemento (ultimo o primero)
// splice() -> Modificar o agregar elementos 
// slice() -> Copiar una parte de la lista 

// acceder a un dato de la lista arrays[indice]
// Como acceder al indice de una lista -> array.indexOf(dato)

let lista = [true,false,123,"marta","joaquin"]

let indiceMarta=lista.indexOf("marta")
console.log(indiceMarta)

lista.splice(indiceMarta,1,"Marta Gomez")
console.log(lista)

// Metodos: funciones ya creadas por el lenguaje 

function agregarDato(dato){
    lista.push(prompt(dato))
    console.log(lista)
}

agregarDato()
