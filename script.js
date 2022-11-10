
  // CARRITO
        const listaDeProductos = [
       {
           id: 1,
           nombre: "Exact perro adulto x 25kg",
           precio: 1000,
           stock: 10
       },
       {
           id: 2,
           nombre: "Exact perro cachorro x 15kg",
           precio: 800,
           stock: 10
       },
       {
           id: 3,
           nombre: "Exact gato adulto x 10kg",
           precio: 810,
           stock: 10
       },
       {
        id: 4,
        nombre: "9 lives gato adulto salmon y atun x 8kg",
        precio: 900,
        stock: 8
       },
       {
        id: 5,
        nombre: "9 lives gato adulto carne seleccionada x 8kg",
        precio: 900,
        stock: 8
       },
       {
       id: 6,
       nombre: "9 lives gatito cachorro carne y leche x 8 kg",
       precio: 950,
       stock: 8
       },
       {
       id: 7,
       nombre: "Top nutrition perro adulto large breed x 18 kg",
       precio: 1600,
       stock: 5
       },
       {
        id: 8,
        nombre: "Top nutrition perro adulto small breed x 8 kg",
        precio: 1200,
        stock: 5
        },
        {
        id: 9,
        nombre: "Ganacan perro adulto mix x 25 kg",
        precio: 800,
        stock: 20
        },
        {
        id: 10,
        nombre: "Amici perro cachorro x 15 kg",
        precio: 850,
        stock: 15
        },
        {
        id: 11,
        nombre: "Amici perro adulto mix x 22 kg",
        precio: 880,
        stock: 20
        },
        {
        id: 12,
        nombre: "Amici perro adulto carne x 22 kg",
        precio: 880,
        stock: 20
        },
        {
        id: 13,
        nombre: "Zimpi perro adulto x 15 kg (oferta especial)",
        precio: 500,
        stock: 30
        }
        
        
   ]

   let catalog = document.getElementById('items')
   let cartList = document.getElementById('carrito')
   let buttonEmpty = document.getElementById('boton-vaciar')
   let totalValue = document.getElementById('total')
   let cart = []

   buttonEmpty.addEventListener('click',emptyButtonHandler)

   loadCartFromStorage()
   renderCart()

   
   listaDeProductos.forEach((prod) => {
       let container = document.createElement('div')
       container.classList.add('card', 'col-sm-4')
        //BODY
        let cardBody = document.createElement("div")
        cardBody.classList.add('card-body')
        //TITLE
        let cardTitle = document.createElement("h5")
        cardTitle.classList.add('card-title')
        cardTitle.innerText = prod.nombre
        //PRECIO
        let cardPrice = document.createElement("p")
        cardPrice.classList.add('card-text')
        cardPrice.innerText = `$${prod.precio}`
        //STOCK
        let cardStock = document.createElement("p")
        cardStock.classList.add('card-text')
        cardStock.innerText = `Stock: ${prod.stock}`
        //BUTTON
        let cardButton = document.createElement("button")
        cardButton.classList.add('btn', 'btn-primary')
        cardButton.innerText = `comprar`
        cardButton.setAttribute('mark', prod.id)
        cardButton.addEventListener('click', addProdToCart)

        cardBody.append(cardTitle)
        cardBody.append(cardPrice)
        cardBody.append(cardStock)
        cardBody.append(cardButton)
        container.append(cardBody)
        catalog.append(container)
   })

function addProdToCart(event){
    cart.push(event.target.getAttribute('mark'))
    renderCart()
    //LIBRERÍA TOASTIFY
    Toastify({
        text: "Agregaste correctamente el alimento al carrito",
        className: "info",
        style: {
          background: "blue",
        },
        duration: 3000,
        gravity:'bottom',
        position:'left'
      }).showToast();
}    
    
function renderCart(){

    saveCartToStorage()

    cartList.innerHTML = ''

    let cartWithoutRepeatedElements = [...new Set(cart)]

    cartWithoutRepeatedElements.forEach((itemId) => {
        let item = listaDeProductos.filter((producto) => {
            return producto.id === parseInt(itemId)
        })
        let quantity = cart.reduce((total, id) => {
            return id === itemId ? total += 1 : total
        }, 0)
   

   let linea = document.createElement('li')
   linea.classList.add('list-group-item','text-right', 'mx-2')
   linea.innerText = `${quantity} x ${item[0].nombre} - $${item[0].precio}`

   let buttonDelete = document.createElement('button')
   buttonDelete.classList.add('btn', 'btn-danger', 'mx-5')
   buttonDelete.innerText = 'X'
   buttonDelete.dataset.item = itemId
   buttonDelete.addEventListener('click' , deleteProduct)

   linea.append(buttonDelete)
   cartList.append(linea)
    })

    totalValue.innerText = calculateTotalPrice()
}

function deleteProduct(event){
 let id = event.target.dataset.item
 cart = cart.filter((cartId) => {
    return cartId != id
})
renderCart()
} 

function emptyButtonHandler(){
cart = []
cartList.innerHTML = ''
totalValue.innerText = 0
}

function calculateTotalPrice(){
    return cart.reduce((total, itemId) => {
        let item = listaDeProductos.filter((producto) => {
            return producto.id === parseInt(itemId)
        })

        return total + item[0].precio
    }, 0)
} 
//  ALMACENAR EN EL STORAGE
function saveCartToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart))
}

function loadCartFromStorage(){
    if(localStorage.getItem('cart') !== null){
        cart = JSON.parse(localStorage.getItem('cart'))
    }
}

//DOM (getElementById, innerHtml)

let oferta = document.getElementById("oferta")

let promoción = document.createElement("div")

promoción.innerHTML = "<h3>zimpi perro adulto x 15 kg,Precio: $500</h3>"

oferta.append(promoción)

// DOM (Propiedad innerText)

entrega.innerText = "HACEMOS ENTREGA DE LOS PRODUCTOS SIN CARGO DENTRO DE CÓRDOBA CAPITAL.CONTAMOS CON NUESTROS PROPIOS VEHÍCULOS PARA HACER LOS REPARTOS DE LA MERCADERÍA."

// EVENTOS(EVENTOS CHANGE)
//para que el usuario deje su nombre y su número de teléfono

let input1 = document.getElementById("tu nombre");

let input2 = document.getElementById("tu número de teléfono");

//LOCAL STORAGE (SetItem)

localStorage.setItem("nuevoDato", "Santiago Eloy Corbella")
localStorage.setItem("otroDatoNuevo", "39 Años")
localStorage.setItem("otroDato", "Estudiante de Coder House")
localStorage.setItem("otroDatoMás","Animal'S Food")

// ALMACENAR OBJETOS EN STORAGE 

const producto14 = { id: 14, producto: "Fiacas perro adulto x 15 kg precio=$450" };
localStorage.setItem("producto14", producto14);

//JSON (ALMACENAR ARRAY DE OBJETOS)
// Estos productos todavía no están a la venta en la tienda en línea , se está analizando si serán lanzados a la venta o no.

const productos = [{ id: 15, producto: "top nutricion gato adulto x 2,0 kg",precio:300 },
                   { id: 16, producto:"top nutricion gatito x 2,0 kg", precio:330 },
                   { id: 17, producto:"top nutricion gato senior x 2,0 kg", precio:340},
                   { id: 18, producto:"top nutricion perro senior x 3,0 kg", precio:290}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

//ALMACENAR ARRAY COMPLETO

guardarLocal("listaProductos", JSON.stringify(productos));

//MÉTODO FETCH

/*document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
function cargarJSON() {
    fetch('alimentos.json')
       .then(function(res) {
           return res.json();
        })
        .then(function(data){
            let html ='';
            data.forEach(function(alimento) {
                html +=`
                     <li>${alimento.nombre} ${alimento.sabor}</li>
                `;
            })
            document.getElementById('resultado').innerHTML = html;
        })               
    } 
    */
    
    




















   
       

        

   
       
                         











              