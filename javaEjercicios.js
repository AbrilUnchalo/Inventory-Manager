// array to load products
let productsArray = [];

// class for create news products 
class Product {
    constructor(name, quiantityStarting, quantitySold, quantitySupplied) {
        this.name = name;
        this.quiantityStarting = quiantityStarting;
        this.quantitySold = quantitySold;
        this.quantitySupplied = quantitySupplied;
        this.finalStock = 0;
    }
}

// Final stock calculator 

calculateEndingStock() {
    this.finalStock = this.quiantityStarting + this.quantitySupplied - this.quantitySold;
  } ;