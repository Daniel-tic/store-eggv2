const $productList = document.getElementById("products");
const $inputSearch = document.getElementById("search");
//constructor
class Product {
  constructor(id, image, name, color, price, discount) {
    this.id = id
    this.image = image
    this.name = name
    this.color = color
    this.price = price
    this.discount = discount
  }
}
//funcion flecha
const cardProductTemplate = (product) => {
  const { id, image, name, color, price, discount } = product //deconstructor para acceder a las propiedades  de produc directamente
  return `
    <a class="product-card" href="./details.html?id=${id}">
      <div>
        <img class="product-img" src="${image}" alt="${name.toUpperCase()}" />
      </div>
      <div class="product-info">
        <div class="product-title">${name}</div>
        <div class="product-color">${color}</div>
        <div class="product-price-block">
          <span class="product-price">${price}</span>
          <span class="product-discount">${discount}% Off</span>
        </div>
        <div class="product-tax-policy">
          Incluye impuesto País y percepción AFIP
        </div>
      </div>
    </a>
  `
}

const handleSearchProduct = (event, productsList) => {
  const valueInputSearch = event.target.value
  const filterProducts = productsList.filter((product) => {
    return product.name.toLowerCase().includes(valueInputSearch.toLowerCase())
  })
  return filterProducts
}

const products = [
  new Product(1, 'https://i.postimg.cc/kX8PKZpq/ipad2.jpg', 'iPad Pro 12.9', 'Silver', 90000, 50),
  new Product(2, 'https://i.postimg.cc/kX8PKZpq/ipad2.jpg', 'iPhone 12', 'Black', 70000, 20),
  new Product(3, 'https://i.postimg.cc/kX8PKZpq/ipad2.jpg', 'MacBook Air', 'Space Gray', 80000, 30),
  new Product(4, 'https://i.postimg.cc/kX8PKZpq/ipad2.jpg', 'Apple Watch Series 6', 'Gold', 30000, 10),
  new Product(5, 'https://i.postimg.cc/kX8PKZpq/ipad2.jpg', 'AirPods Pro', 'White', 15000, 15),
  new Product(6, 'https://i.postimg.cc/kX8PKZpq/ipad2.jpg', 'HomePod Mini', 'Space Gray', 10000, 5),
  new Product(7, 'https://i.postimg.cc/kX8PKZpq/ipad2.jpg', 'Apple TV 4K', 'Black', 20000, 25),
  new Product(8, 'https://i.postimg.cc/kX8PKZpq/ipad2.jpg', 'Magic Keyboard', 'White', 15000, 0),
  new Product(9, 'https://i.postimg.cc/kX8PKZpq/ipad2.jpg', 'Apple Pencil (2nd Gen)', 'White', 10000, 0)
]

//imprime los cards de productos de cada uno 
const loadProducts = (productsList) => {
  for (const product of productsList) {
    $productList.innerHTML += cardProductTemplate(product)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if ($productList) {
    loadProducts(products)
  }
})

$inputSearch?.addEventListener('keyup', (event) => {
  $productList.innerHTML = ''
  const filteredProductList = handleSearchProduct(event, products)
  loadProducts(filteredProductList)
})

//revisar codigo
// function createCard(product) {
//   return `
// <a href="/details.html?id=${product.id}" class="product-card">
//   <img 
//   class="product-img" 
//   src="${product.imgSrc}" 
//   alt="${product.alt}" 
//   loading="lazy">
// <div class="product-info">
// <span class="product-title">${product.nombre}</span>
// <span class="product-description">${product.descripcion}</span>
// <div class="product-price-block">
// <span class="price">${product.precio}</span>
// <span class="discount">${product.discount}</span>
// </div>
// <div class="product-tax-policy">
// ${product.taxPolicy}
// </div>
// </div>  
// </a>
// `;
// }

// function printCards(arrayOfProducts, idSelector) {
//   let productsTemplate = "";
//   for (const product of arrayOfProducts) {
//     productsTemplate += createCard(product);
//   }
//   const productsSelector = document.getElementById(idSelector);
//   productsSelector.innerHTML = productsTemplate;
// }

// printCards(products, "products");
