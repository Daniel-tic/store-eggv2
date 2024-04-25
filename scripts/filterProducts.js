// const $productList = document.getElementById("productList")
// const $inputSearch = document.getElementById('inputSearch')

// class Product {
//   constructor(image, name, color, price, discount) {
//     this.image = image
//     this.name = name
//     this.color = color
//     this.price = price
//     this.discount = discount
//   }
// }

// const cardProductTemplate = (product) => {
//   const { image, name, color, price, discount } = product
//   return `
//     <a class="card-product" href="./product-detail.html">
//       <div>
//         <img class="card-product-image" src="${image}" alt="${name.toUpperCase()}" />
//       </div>
//       <div class="card-product-info">
//         <div class="card-product-title">${name}</div>
//         <div class="card-product-color">${color}</div>
//         <div class="card-product-price">
//           <span class="card-product-current-price">${price}</span>
//           <span class="card-product-discount">${discount}% Off</span>
//         </div>
//         <div class="card-product-tax">
//           Incluye impuesto País y percepción AFIP
//         </div>
//       </div>
//     </a>
//   `
// }

// const handleSearchProduct = (event, productsList) => {
//   const valueInputSearch = event.target.value
//   const filterProducts = productsList.filter((product) => {
//     return product.name.toLowerCase().includes(valueInputSearch.toLowerCase())
//   })
//   return filterProducts
// }

// const products = [
//   new Product('./assets/ipadPro.png', 'iPad Pro 12.9', 'Silver', 90000, 50),
//   new Product('./assets/ipadPro.png', 'iPhone 12', 'Black', 70000, 20),
//   new Product('./assets/ipadPro.png', 'MacBook Air', 'Space Gray', 80000, 30),
//   new Product('./assets/ipadPro.png', 'Apple Watch Series 6', 'Gold', 30000, 10),
//   new Product('./assets/ipadPro.png', 'AirPods Pro', 'White', 15000, 15),
//   new Product('./assets/ipadPro.png', 'HomePod Mini', 'Space Gray', 10000, 5),
//   new Product('./assets/ipadPro.png', 'Apple TV 4K', 'Black', 20000, 25),
//   new Product('./assets/ipadPro.png', 'Magic Keyboard', 'White', 15000, 0),
//   new Product('./assets/ipadPro.png', 'Apple Pencil (2nd Gen)', 'White', 10000, 0)
// ]

// const loadProducts = (productsList) => {
//   for (const product of productsList) {
//     $productList.innerHTML += cardProductTemplate(product)
//   }
// }

// document.addEventListener('DOMContentLoaded', () => {
//   loadProducts(products)
// })

// $inputSearch.addEventListener('keyup', (event) => {
//   $productList.innerHTML = ''
//   const filteredProductList = handleSearchProduct(event, products)
//   loadProducts(filteredProductList)
// })

// Definimos la función captureText
function captureText() {
    // Obtenemos el valor del campo de entrada
    // const inputElement = event.target;
    // const inputText = inputElement.value;

    // // Realizamos alguna acción con el texto capturado
    // console.log(`Texto capturado: ${inputText}`);
    console.log("hola");
}

// Ejemplo de uso en HTML:
// <input type="text" id="miInput" placeholder="Presiona Enter">

// Ejemplo de uso en JavaScript:
// Escuchamos el evento keyup en el campo de entrada
document.querySelector("#search").addEventListener("keyup", captureText);

const searchSelector = document.querySelector("input");
// searchSelector.addEventListener("keyup", event=>captureText(event));

const imputSearch = document.querySelector('#search');
// Agrega un escuchador de eventos para el evento keyup en el input de búsqueda
imputSearch.addEventListener("keyup", captureText);
function captureText(event) {
    // Verifica si event.target.value está definido antes de llamar a toLowerCase()
    const searchText = event.target.value.toLowerCase();
    console.log(searchText)

    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText));
    console.log(filteredProducts)
    updateView(filteredProducts);   
}

function updateView(products) { //llamar a la funcion que esta en un producto 

    const productContainer = document.querySelector('#products');
    
    productContainer.innerHTML = '';
    
    printCards(products, "products");
    }
    