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


              