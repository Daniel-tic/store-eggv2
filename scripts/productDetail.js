const $principalImage = document.getElementById('principalImage')
const $thumbnails = document.getElementById('thumbnailImages')
const $productDetail = document.getElementById('productDetail')
const query = location.search
const params = new URLSearchParams(query)
const id = params.get('id')

$thumbnails?.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    const newImage = event.target.src
    const newAlt = event.target.alt
    $principalImage.setAttribute('src', newImage)
    $principalImage.setAttribute('alt', newAlt)
  }
})

const getProductDetails = (paramId) => {
  const findProduct = products.find((product) => product.id === Number(paramId))
  const imageTemaple = productImageTemplate(findProduct)
  const infoTemplate = productInformationTemplate(findProduct)
  const checkoutTemplate = productCheckoutTemplate(findProduct)
  $productDetail.appendChild(imageTemaple)
  $productDetail.appendChild(infoTemplate)
  $productDetail.appendChild(checkoutTemplate)
  // $productDetail.innerHTML += imageTemaple
  // $productDetail.innerHTML += infoTemplate
  // $productDetail.innerHTML += checkoutTemplate
}

const productImageTemplate = (product) => {
  const { name } = product
  const template = `
    <section class="product-images-block">
        <div class="product-images">
            <img
            class="mini-img"
            src="https://i.postimg.cc/HxGQcrcp/mock1.jpg"
            alt="MacBook Pro 13'4"
            />
            <img
            class="mini-img"
            src="https://i.postimg.cc/Y91Q1tYQ/mock2.jpg"
            alt="MacBook Pro 13'4"
            />
        </div>
        <img
            class="big-img"
            id="big-img"
            src="https://i.postimg.cc/HxGQcrcp/mock1.jpg"
            alt="${name.toUpperCase()}"
        />
    </section>
  `
  return document.createRange().createContextualFragment(template)
}

const productInformationTemplate = (product) => {
  const { name, id } = product
  const template = `
    <div class="product-description-block">
        <h1 class="product-title">${name}</h1>
        <form class="product-selector">
            <fieldset class="product-fieldset">
            <label class="product-label" for="color">Color</label>
            <select
                class="product-select"
                type="text"
                placeholder="Selecciona un color"
                id="color"
            >
                <option value="Silver">Silver</option>
            </select>
            </fieldset>
        </form>
        <div class="product-description">
            <span class="product-label">Descripción</span>
            <p>
            Experience the power of creativity with the MacBook Pro 13'4.
            Featuring 8GB of RAM and 512GB of storage, this laptop provides
            the performance and storage capacity needed for demanding tasks.
            The sleek design in silver and space gray adds a touch of
            sophistication. The high-resolution Retina display brings your
            visuals to life, whether you're editing photos, creating videos,
            or simply browsing the web. With the latest technology and a
            lightweight build, the MacBook Pro 13'4 is the perfect companion
            for professionals and creative individuals alike.
            </p>
        </div>
    </div>
    
  `
  return document.createRange().createContextualFragment(template)
}

const productCheckoutTemplate = (product) => {
  const { price, discount } = product
  const template = `
    <div class="product-checkout-block">
        <div class="checkout-container">
            <span class="checkout-total-label">Total:</span>
            <h2 id="price" class="checkout-total-price">$ ${price}</h2>
            <p class="checkout-description">
            Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
            50711 (${discount}%) haciendo la solicitud en AFIP.
            </p>
            <ul class="checkout-policy-list">
            <li>
                <span class="policy-icon"
                ><img src="./assets/truck.png" alt="Truck"
                /></span>
                <span class="policy-desc"
                >Agrega el producto al carrito para conocer los costos de
                envío</span
                >
            </li>
            <li>
                <span class="policy-icon"
                ><img src="./assets/plane.png" alt="Plane"
                /></span>
                <span class="policy-desc"
                >Recibí aproximadamente entre 10 y 15 días hábiles,
                seleccionando envío normal</span
                >
            </li>
            </ul>
            <div class="checkout-process">
            <div class="top">
                <input type="number" min="1" value="1" />
                <button type="button" class="cart-btn">
                Añadir al Carrito
                </button>
            </div>
            </div>
        </div>
    </div>
    
  `
  return document.createRange().createContextualFragment(template)
}

document.addEventListener('DOMContentLoaded', () => {
  getProductDetails(id)
})