
/*
-Variables
-Tipo de datos 
-Condicionales
-oepradores 
- Funciones/metodos: console.log() -prompt() - alert() - number() - parseInt() - parseFloat() - toString() - tolowercase() - touppercase() - typeOf(indica que tipo de dato es el valor de la variable)
*/
/*
1. Hacer una función que reciba un parámetro y nos devuelva el tipo de
valor que es.
Ejemplo:
Let valor =“hola” devuelve string
Let valor =4546 devuelve number
*/
let valor=456;
console.log(typeof(valor));

/*
2. Dado una edad , usar un condicional para indicar por consola si esa
persona es mayor de 18 años o no. 
 */

let edad = prompt("intorduzca su edad")

if (edad>18){
    console.log("Es mayor a 18")
}   else { 
    if (edad == 18) {
        console.log("Tiene 18")
    }
    else {console.log("Es menor a 18")
    }
}

edad>=18? edad==18? console.log("Tiene 18"):console.log("Es mayor a 18"):console.log("Es menor a 18");

/*
3. Confeccionar un programa que pida por medio de un prompt() tres notas
de un alumno, calcule el promedio e imprima alguno de estos mensajes:
• Si el promedio es >=7 mostrar "Promocionado".
• Si el promedio es >=4 y <7 mostrar "Regular".
• Si el promedio es <4 mostrar “Reprobado”
 */

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

// -------------------- 2da Alternativa ------------------



/*
4. Dado un año ingresado por medio de un prompt() devolver por consola
la edad que tiene o tendrá este año. Para este ejercicio no vamos a
tener en cuenta el mes en que nació 
*/ 

let años=parseInt(prompt("Ingrese su año de nacimiento"))
let cantAños = 2024 - años;
console.log(cantAños) 

/*
5. Armar un porgrama que tome un numero ingresado e indique por consola si el mismo es par o impar 
*/

let numero = parseInt(prompt("Ingrese un numero"))

numero%2 === 0? console.log("el numero es par"): console.log("el numero NO es par");