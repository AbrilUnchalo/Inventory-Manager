// array to load products
let productsArray = [];

// class for create news products (in the form of an object)
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

// Show results of the products and details
showResult() {
    console.log("Initial stock of " + this.name + ": " + this.quiantityStarting);
    console.log("Units sold :" + this.quantitySold);
    console.log("Replenished units of " + this.name + ": " + this.quantitySupplied);
    console.log("Total stock of " + this.name + ": " + this.finalStock);
}

//Function to add a product
function addProduct () {
   let name = prompt();
   let quiantityStarting = prompt();
   let quantitySold = prompt();
   let quantitySupplied = prompt();
}