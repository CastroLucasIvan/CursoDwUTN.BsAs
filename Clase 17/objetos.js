

// Producto y precio 


let producto = ["campera","jean","Buzo","Zapatillas"]

let remera = {
    color: ["rojo","verde","azul"],
    precio: 10000 ,
    marca: "jonas",
    descuento: true 
}

let pantalon = {
    color: ["rojo","verde","azul"],
    precio: 30000 ,
    marca: "jonas",
    descuento: true 
}

let buzo = {
    color: ["rojo","verde","azul"],
    precio: 15000 ,
    marca: "jonas",
    descuento: true 
}

// sintaxis de Como acceder a la propiedad del obnjeto
// objeto.propiedad 

console.log(remera.precio)
console.log(buzo.marca)

// Modificar propiedad 
// sintaxis: objeto.propiedad= new valor
buzo.descuento=false 

// crear nueva propiedad 
pantalon.talles=["s","m","l","xl"]
console.log(pantalon)

// quitar propiedad 
delete pantalon.descuento 
console.log(pantalon)