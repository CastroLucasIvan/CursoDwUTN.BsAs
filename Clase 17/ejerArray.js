
/*
Marcelo esta armando la lista para el super. Crear un bucle para que Marcelo pueda ingresar 
los productos que necesite y muestre por consola la lista completa.
 */

// -----------------OPCION 1 -------------------------


//let producto=prompt("Marcelo ingrese un producto")
//let listaProdu=[]

/*while (producto!=="fin"){
    listaProdu.push(producto)
    console.log("Ingrese otro producto o fin para terminar") --> se redefine el valor del producto para que no sea un bucle infinito ya que la variable 
    producto valdra siempre lo mismo
}
console.log(listaProdu);
*/

//--------------------------OPCION 2------------------------------------

let producto=prompt("Marcelo ingrese un producto")
let listaProdu=[]

do{
    console.log("Ingrese otro producto o fin para terminar")
    listaProdu.push(producto)

}while (producto.toLowerCase() !=="fin")

// string.toLowerCase()- > Transforma todo en minuscula 
//.string.toLowerCase() -> Transforma todo en mayuscula 

