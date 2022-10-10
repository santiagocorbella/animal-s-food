//ANIMAL'S FOOD//

//PRIMER ARMADO DE UN PEQUEÑO FLUJO DEL PROYECTO://
//2 productos -> mostrar productos-> el cliente quiere comprar-> ¿que cantidad?-> mostrar precio total de compra//

let nombreProductoA = "ExactPerroAdultoX25Kg"
let precioProductoA= 1000

let nombreProductoB = "ExactPerroCachorroX15Kg"
let precioProductoB= 800

alert("Acepte si quiere comprar: " + nombreProductoA + " y " + nombreProductoB)

let cantidadProductoA = prompt("ingrese que cantidad de " + nombreProductoA + "desea comprar:")
let cantidadProductoB = prompt("ingrese que cantidad de " + nombreProductoB + "desea comprar:")

let precioTotalA = cantidadProductoA * precioProductoA
let precioTotalB = cantidadProductoB * precioProductoB

let precioTotal = precioTotalA + precioTotalB

alert("El precio total es: " + precioTotal)

// flujo con condicionales//
//2 productos -> mostrar productos-> ¿compra?-> ¿que cantidad?-> mostrar precio total de compra//
let nombreProductoC = "9 LIVES GATO ADULTO SALMON Y ATUN X 8 KG"
let precioProductoC= 900

let nombreProductoD = "9 LIVES GATO ADULTO CARNE SELECCIONADA X 8 KG"
let precioProductoD= 900

let compra = prompt("ingrese SI si quiere comprar: " + nombreProductoC + " y " + nombreProductoD)

if(compra == "SI"){

let cantidadProductoC = prompt("ingrese que cantidad de " + nombreProductoC + "desea comprar:")
let cantidadProductoD = prompt("ingrese que cantidad de " + nombreProductoD + "desea comprar:")

let precioTotalC = cantidadProductoC * precioProductoC
let precioTotalD = cantidadProductoD * precioProductoD

let precioTotal = precioTotalC + precioTotalD 

alert("El precio total es: " + precioTotal)    
}
alert("Gracias por su visita")

//¿Que pasa si el usuario no quiere comprar dos productos y solo quiere uno ?
// 2 productos -> mostrar productos->El usuario solo quiere comprar un producto->¿que cantidad?->mostrar precio total//

let nombreProductoE = "top nutricion perro adulto raza grande x 18 kg"
let precioProductoE= 1600

let nombreProductoF = "top nutricion perro adulto small breed x 8 kg"
let precioProductoF= 1200

let productoCompra = prompt("Ingrese que producto quiere comprar: \n1 - top nutricion perro adulto raza grande x 18 kg \n2 - top nutricion perro adulto small breed x 8 kg")

if(productoCompra == "top nutricion perro adulto raza grande x 18 kg"){
  let cantidadProductoTopNutricionPerroAdultoRazaGrandeX18Kg = prompt("ingrese que cantidad de " + nombreProductoE + " desea comprar:")
  let precioTotal = cantidadProductoTopNutricionPerroAdultoRazaGrandeX18Kg * precioProductoE  
  alert("El precio total es: " + precioTotal) 
}    
 else if(productoCompra == "top nutricion perro adulto small breed x 8 kg"){
    let cantidadProductoTopNutricionPerroAdultoSmallBreedX8Kg = prompt("ingrese que cantidad de " + nombreProductoF + " desea comprar:")
    let precioTotal = cantidadProductoTopNutricionPerroAdultoSmallBreedX8Kg * precioProductoF 
    alert("El precio total es: " + precioTotal) 
  }
  else{
    alert("no tenemos ese producto a la venta")
  }
 //Que pasa si el usuario nos pide una cantidad mayor de mercaderia de un producto que nosotros no tenemos  en stock//
 // 3 productos -> mostrar productos->El usuario nos pide un cantidad mayor a la que tenemos en stock->
let nombreProductoG = "ganacan perro adulto mix x 25 kg"
let precioProductoG = 800
let stockProductoG = 20

let nombreProductoH = "amici perro cachorro x 15 kg"
let precioProductoH = 850
let stockProductoH = 30

let nombreProductoI = "amici perro adulto mix x 22 kg"
let precioProductoI = 880
let stockProductoI = 40


let productoCompra1 = prompt("Ingrese que producto quiere comprar: \n - ganacan perro adulto mix x 25 Kg\n - amici perro cachorro x 15 kg\n - amici perro adulto mix x 22 kg")
let precioTotal1 = 0

if(productoCompra1 == "ganacan perro adulto mix x 25 kg"){
    let cantidadProductoGanacanPerroAdultoMixX25Kg = prompt("ingrese que cantidad de " + nombreProductoG + "desea comprar:")
    if(cantidadProductoGanacanPerroAdultoMixX25Kg <= stockProductoG){
        precioTotal1 = cantidadProductoGanacanPerroAdultoMixX25Kg * precioProductoG
    }    
    else{
        alert("Actualmente tenemos " + stockProductoG + " unidades de este producto")
    }
}    
else if (productoCompra1 == "amici perro cachorro x 15 kg"){
    let cantidadProductoAmiciPerroCachorroX15Kg = prompt("ingrese que cantidad de " + nombreProductoH + "desea comprar:")
    precioTotal1 = cantidadProductoAmiciPerroCachorroX15Kg * precioProductoH
}    
else if(productoCompra1 == "amici perro adulto mix x 22 kg"){
    let cantidadProductoAmiciPerroAdultoMixX22Kg = prompt("ingrese que cantidad de " + nombreProductoI + "desea comprar:")
    precioTotal1 = cantidadProductoAmiciPerroAdultoMixX22Kg * precioProductoI   
}

//Utilización de while:ESC

let entrada =  prompt("1 -exact perro adulto x 25 kg\n2 exact gato adulto x 10 kg\n3 exact perro cachorro x 15 kg\n ESC -Salir");

while(entrada != "ESC" ){
  alert("El usuario ingresó "+ entrada);

  entrada =  prompt("1 -exact perro adulto x 25 kg\n2 exact gato adulto x 10 kg\n3 exact perro cachorro x 15 kg\n ESC -Salir");
} 

// FUNCIONES//
function bienvenido(){
  alert("Bienvenido a animal's food")
}
bienvenido() 

// Segunda Preentrega , Segundo Desafío

// Objetos de JS

//  Objetos (Escribir el Producto I como un Objeto) 

let ProductoI = {
  nombre: "amici perro adulto mix x 22 kg",
  precio: 880,
  stock: 40
}

// Objetos (Obteniendo Valores del Objeto) 

if(productoCompra.toUpperCase() == "amici perro adulto mix x 22 kg"){
    let cantidadProductoAmiciPerroAdultoMixX22Kg = prompt("ingrese que cantidad de " + ProductoI.nombre + "desea comprar:")
    calculoStock(cantidadProductoAmiciPerroAdultoMixX22Kg, precioProductoI.stock, ProductoI.precio)
    productoI.restarStock(cantidadProductoAmiciPerroAdultoMixX22Kg)
}    

// Objetos (Constructores) (Instancias)

let productoI = {
    nombre: "amici perro adulto mix x 22 kg",
    precio: 880,
    stock: 40
}

function producto(nombre, precio, stock){
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock;
}

let productoJ = new producto("amici perro adulto carne x 20 kg",880,50)
console.log(productoI)
console.log(productoJ)

//Objetos (Métodos Personalizados)

function producto(nombre, precio, stock){
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock;
  this.restarStock = function(cantidad){
      this.stock -= cantidad
  }
}

//Objetos (Operador For)

let productoG = new producto("ganacan perro adulto mix x 25 kg",800,20)
for(const propiedad in productoG){
    console.log(productoG [propiedad])
}

// ARRAY (Mostrar un solo elemento)

let listaAlimentoGanacanPerro = [ "ganacan perro adulto mix x 25 kg", 850,"oferta"]

console.log(listaAlimentoGanacanPerro[2])

// ARRAY (Recorrido del Array)

let listaPromociónTopNutricion = [ "top nutricion perro adulto small breed x 8 kg", 1200,"promoción"]

for(let i = 0; i <= 2; i++){
    console.log(listaPromociónTopNutricion[i])
}

//ARRAY(Propiedad Length)//

let listaOportunidadAmiciPerroCachorro = [ "amici perro cachorro x 15 kg",850,"oportunidad"]
console.log(listaOportunidadAmiciPerroCachorro.length)

// ARRAY (Método Push)

let OfertonNueveVidasX8Kg = ["nueve vidas gato adulto x 8 kg", 900]

let sabor = prompt("Ingrese el sabor:")

OfertonNueveVidasX8Kg.push(sabor)

console.log(OfertonNueveVidasX8Kg)

// ARRAY (Método Unshift)

let promoAmiciPerroAdultox22Kg = ["amici perro adulto x 22 kg", 880]

let gusto = prompt("ingrese el gusto:")

promoAmiciPerroAdultox22Kg.unshift(gusto)

console.log(promoAmiciPerroAdultox22Kg)

// ARRAY -> (Quitar elementos-Pop) 

let topNutricionPerroAdulto = ["top nutricion perro adulto raza grande","18 kg", 1300]

topNutricionPerroAdulto.pop()

console.log(topNutricionPerroAdulto)

//ARRAY -> (quitar elementos-shift)

let topNutricionPerroAdultoRazaPequeña = ["producto", "top nutricion perro adulto raza pequeña x 8 kg", 1200]

topNutricionPerroAdultoRazaPequeña.shift()

console.log(topNutricionPerroAdultoRazaPequeña)

// ARRAY (Método Join)

let ExactPerroAdulto = ["exact perro adulto", "25 kg",1000]
console.log(ExactPerroAdulto.join(", "))

// ARRAY (Método splice)

const nombres = ["amici perro adulto mix x 25 kg","amici perro adulto carne x 22 kg","amici perro adulto cachorro x 15 kg","exact gato x 10 kg"];

nombres.splice(1,2)

console.log(nombres)

//ARRAY (Método Includes)

const names = ["exact gato x 10 kg","amici gato mix x 10 kg"," Exact perro cachorro x 15 kg","amici perro cachorro x 15 kg"]

console.log(names.includes("exact gato x 10 kg"))

console.log(names.includes("amici gato mix x 10 kg"))

console.log(names.includes("dogui perro adulto carne x 20 kg "))

//FUNCIONES DE ORDEN SUPERIOR (Abstracción)

function sumarRango(a,b){
    let numeros = []
    for(let i = a; i <= b; i++){
        numeros.push(i)
    }
    const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)    
    return total
  }
  
  
let total = 0

for (let i = 1; i <= 5; i++) {
    total += i
}

console.log("ciclo:", total)

console.log("funcion", sumarRango(1, 5) )

//FUNCIONES DE ORDEN SUPERIOR (Recibir Funciones Por Parametros)

function porCadaUno(array, fn) {
    for (const elemento of array) {
        fn(elemento)
    }
  }
  
  porCadaUno([1,3,4,5], console.log)

  //FUNCIONES DE ORDEN SUPERIOR (Console.Log)

  let enTotal = 0
  function acumular(num) {
   enTotal += num
  }

  
  function porCadaUno(array, fn) {
      for (const elemento of array) {
          fn(elemento)
      }
    }
    
porCadaUno([2,3,4,8], acumular)

console.log(enTotal)

// FUNCIONES DE ORDEN SUPERIOR (For Each)

const numeros =[1, 2, 3, 4 ,5 ,6]

numeros.forEach( (num)=> {

    console.log(num)

} )      

// FUNCIONES DE ORDEN SUPERIOR (Método Find)

const alimentos = [

    {nombre: "exact perro adulto x 25 kg", precio: 1000},

    {nombre: "exact perro cachorro x 15 kg", precio: 800},

]

const resultado = alimentos.find((el) => el.nombre === "exact perro cachorro x 15 kg")

const resultado2 = alimentos.find((el) => el.nombre === "dogui perro adulto carne x 20 kg")

console.log(resultado)

console.log(resultado2)

// FUNCIONES DE ORDEN SUPERIOR (Método Some)

console.log( alimentos.some((el) => el.nombre == "alpo perro cachorro x 15 kg"))

console.log( alimentos.some((el) => el.nombre == "pedigree perro adulto pollo x 20 kg"))

// FUNCIONES DE ORDEN SUPERIOR (Método Map)

const alimentosBalanceados = [
    {nombre: "amici perro adulto mix x 22 kg", precio: 895},
    {nombre:"amici perro adulto carne x 22 kg", precio: 895},
    {nombre:"amici perro cachorro x 15 kg", precio: 875},
    {nombre:"exact perro adulto x 25 kg ", precio: 1150},
]

const nombress = alimentosBalanceados.map((el) => el.nombre)
console.log(nombress)

// FUNCIONES DE ORDEN SUPERIOR (Método Reduce)

const numeross = [1, 2, 3, 4, 5, 6]
const totall = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(totall)



// FUNCIONES DE ORDEN SUPERIOR (Clase Date)

console.log( new Date() )

// FUNCIONES DE ORDEN SUPERIOR (Redondeo)

const generadorNumero = () => {
    return Math.round (Math.random() * 5 )
}

console.log( generadorNumero() )



















  