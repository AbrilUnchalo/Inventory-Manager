// array to load products
let productsArray = [];

// class for creating new products (in the form of an object)
class Product {
    constructor(name, quantityStarting, quantitySold, quantitySupplied) {
        this.name = name;
        this.quantityStarting = quantityStarting;
        this.quantitySold = quantitySold;
        this.quantitySupplied = quantitySupplied;
        this.finalStock = 0;
    }

    // Final stock calculator 
    calculateEndingStock() {
        this.finalStock = this.quantityStarting + this.quantitySupplied - this.quantitySold;
    }
    
    showResult() {
        console.log("Initial stock of " + this.name + ": " + this.quantityStarting);
        console.log("Units sold: " + this.quantitySold);
        console.log("Replenished units of " + this.name + ": " + this.quantitySupplied);
        console.log("Total stock of " + this.name + ": " + this.finalStock);
    }
}

// Function to add a product
function addProduct() {
    let name = prompt("Please, enter the product name:");
    let quantityStarting = prompt("Initial amount of product:");
    let quantitySold = prompt("Number of units sold: ");
    let quantitySupplied = prompt("Number of resupplied units:");
    
    let newProduct = new Product(name, quantityStarting, quantitySold, quantitySupplied);
    productsArray.push(newProduct);
}

// Logic and main function of the inventory manager
function inventoryManager() {
    // Add more products
    let addMoreProducts = true;
    while (addMoreProducts) {
        addProduct();
        let option = prompt("Do you want to add another product? (yes/no)");
        if (option.toLowerCase() !== "yes") {
            addMoreProducts = false;
        }
    }

    // Process the products, looping through each of them and calculating the stock and showing the results
    for (let i = 0; i < productsArray.length; i++) {
        let currentProduct = productsArray[i];
        currentProduct.calculateEndingStock();
        currentProduct.showResult();
    }
}

inventoryManager();






