//definiendo clase
class Product {
  constructor(id, title, price, stock, images, onsale, supplier) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this._supplier = supplier; // _ variable privada
  }
  get getSupplier() {
    return this._supplier;
  }
  /**
     * @param {string} newName
     */
  set setSupplier(newName) {
    this._supplier = newName;
  }
}

const prod1 = new Product();
const prod2 = new Product(2, "lapiz", 2);
const prod3 = new Product(3, "cuaderno", 2.5, 3, "no hay", true);
const prod4 = new Product(4, "papel", 1, 2, "si hay", true, "SAC" );

const products = [prod1, prod2, prod3, prod4];

console.log(prod1);
console.log(prod2);
console.log(prod3);
console.log(prod4);
// prod4.setSupplier = 1 ;
console.log(prod4.getSupplier);

console.log(products);

