
// Bucle - ciclos - repeticion
// for | for-of | while | do-while
// forEach map()| filter()| find() --> exclusivo de java

let listaProdu = ["remera","pantalon","buzo","ojota"]

//---------------------For------------------

/*
for(inicial;condicion;accionPorVuelta){
    acciones a repetir
}
 */
let produNvo = prompt("ingrese un producto ")
let estaEnLista = false

// ----------- OPCION 1

for(let indice=0;indice<listaProdu.length;indice++){
   if (listaProdu[indice] === produNvo ) {
     estaEnLista = true
   }
}
if (estaEnLista== false){
    listaProdu.push(produNvo)
}
console.log(listaProdu)

// ----------- OPCION 2

for(let indice=0;indice<listaProdu.length && estaEnLista== false;indice++){
    if (listaProdu[indice] === produNvo ) {
      estaEnLista = true
    }
 }

 // ----------- OPCION 3


 function buscaPalabar(){
    for(let indice=0;indice<listaProdu.length;indice++){
        if (listaProdu[indice] === produNvo ) {
          estaEnLista = true
          return // agregamos return para cortar el bucle
        }
     }
 }

 //------------------------ for of (excvlusivo para listas)---------------------
 // No tiene freno 

 for(let item of listaProdu){
    console.log(item)
 }

 let ventaTotal = [550,3320,543,385,700]
 let gananciaDia=0

for (venta of ventaTotal){
    gananciaDia=gananciaDia+venta
    
}
console.log("se recaudo:$"+gananciaDia)


//----------------- WHILE(Siempre que sea true)----------

let indice =0
while(indice<ventaTotal.length){
    gananciaDia=gananciaDia+ventaTotal[indice]
    indice++
}
console.log("se recaudo:$"+gananciaDia)

let nombres = [];
let nuevoNobre=prompt("ingrese un nombre")

while(nuevoNobre != "fin"){
    nombres.push(nuevoNobre)
    nuevoNobre= prompt("Ingrese un nuevo nombre o la palabra fin para terminar")
}
console.log(nombres)


//---------------------Do Whilw (Primero acciona y despues ejecuta la condicion)--------------------


do{
    nombres.push(nuevoNobre)
    nuevoNobre= prompt("Ingrese un nuevo nombre o la palabra fin para terminar")
}while(nuevoNobre != "fin")

    // forEach map()| filter()| find() --> exclusivo de java solo con arrays    

    /*
     let ventaTotal = [550,3320,543,385,700]
    let gananciaDia=0

    for (venta of ventaTotal){
    gananciaDia=gananciaDia+venta
    }
    */
   ventaTotal.forEach((venta)=>{
    gananciaDia=gananciaDia+venta
   })
    
   // forEach() Recorren toda la lista y con eso podemos pedirle que realize alguna accion como generar un acumulador o ir concatenando cada item del array
   // map() -> realiza un array nuevo con todos los resultados y tiene un return
   let dia =["Lunes","Martes","Miercoles"]
   let nvoDia=dia.map((dia)=>{return dia+" de 8 a 12"})
   // find() -> trae a un item espesifico del array y el primero que cumpla con la condicion pedida
   // filter()-> Filtra los items que cumplan con la condicion solicitada y traera un array con todas esas condiciones juntas