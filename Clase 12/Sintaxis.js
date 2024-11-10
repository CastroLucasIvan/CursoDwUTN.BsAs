//comentario en linea//
/*Comentario en salto de linea*/

//tipos de datos : 
// caracteres: Alfanumerico -> String
"Soy string"
//`Soy sting`

//Numericos: numbers
1235
12.5 // 12 y medio
12,5 // 12 y 5
//Booleanos: Verdadero  o falso ->boolean
//False //Falso
//True // Verdadero

//Palabras reservadas : 
//False //Falso
//True // Verdadero
NaN //Not adn Number
null // Nulo 
undefined // No esta definido

//Ver por la consola lo que necesitemos

console.log("Hola")
console.log(22)
console.log(true)

//---------------------------------------------------------------------------

// Operadores : 
// Aritmeticas
    // Calculos : +, -, *, /
    // Calculos complejos / Calculadora cientifica: cos, log etc    
    Math.PI
// Comparacion: 

//simbolos -> == | === | > | < | >= | <= | != | !==
    // Igualdad simple "=" se usa para darle valor a una variable
    // igualdad "==" Compara valor (mismos caracteres)
    // triple igual "===" Compara datos (str y str seran iguales)
    33+22 == 55 //true
    2+2== 55 //false
    "Marta" == "marta" // false "M" 

    // Desigual    
        // != -> Valor 
        // !== -> Valor y tipo de dato
        "55" != 55 //false por que los valores son iguales
        "55" !== 55 // true Por que el valo es igual pero no el tipo de dato
    // >,< (mayor o menor) 
    5>5 // flase por que no incluye al 5
    5>=5 // true por que incluye al 5

// Logica
    // &&: and o "y" (necesito que todas las comparaciones se cumplan para que me devuelva true)
    let usuarioIngresado= "usuario";
    let passwordIngresado="OTRApass";
    console.log(usuarioIngresado === "usuario" && passwordIngresado === "pass123") //fase por que la pass es diferente

    // simbolo || : or o "o" (Por lo menos una sea true)
    let edadPersona=14
    let adultoResponsable=true
    
    console.log(edadPersona>16 || adultoResponsable === true) // true ya que una es verda verdadera

    //simbolo ! : not o "no"

    console.log(!(edadPersona>16)) // true ya que devuelve lo opuesto de lo que vale

    // prompt() recibe el dato por parte del usuario y siempre devuelve valor string

    let dato=prompt("ingrese un numero") 

    // Transformar numero de string 
    //parseInt(): Entero | parseFloat(): Decimal | Number: numero tal cual

    console.log(parseFloat(dato) + 22)

    // De numero a string 
    toString(22) // "22" 