

// Arrgelos - arrys - listas

// Para agrupar varios datos se usa []
// podemos hacer lista de cualquier cosa (str number bool)
    //                    0       1    2
const nombrePersonas=["marta", "juan","dario"] 
console.log(nombrePersonas);

// indice (numero que se le asigna a los items de la lista)(enumera las posiciones)
//para acceder a un item de la lista hay que llamar a un item de la lista y entre corchetes colocar el numero de la lista
// Sintaxis --> lista[indice]
console.log(nombrePersonas[2]);

// length(largo)--> cantidad de items en una lista 
// Tambien puedo mencionar cuantos caracteres tiene un string 
console.log(nombrePersonas.length);

// Para modificar la lista se usan metodos --> lista.metodo()
//agregar items a la lista --> push() - unshift()
// push(): agrega al final de la lista 
nombrePersonas.push("nahuel","lautaro","marta",14,17,true)
console.log(nombrePersonas)

// unshift(): Agrega al principio de la lista y corre los indices 
// pop() :saca el ultimo item de la lista 
//shift(): saca el primer item de la lista

nombrePersonas.pop() // --> saco el ultimo 
nombrePersonas.shift() // saco el primero 
console.log(nombrePersonas);

//splice(indice,cantidad,nuevoValor(opcional que indica con que lo remplazo))
nombrePersonas.splice(3,1); //-> indice(3) cantidad(1,quita un solo valor)
console.log(nombrePersonas)
nombrePersonas.splice(2,1,"Dahiana","Laura","Monica"); // quito a nahuel y agrego al resto
console.log(nombrePersonas);

//slice(indiceInicio, indiceFinal): corta el array
console.log(nombrePersonas.slice(3,6)) // muesta desde el indice 3 hasta el 5 ya que el ultimo no lo toma