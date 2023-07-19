// array to load products
let productsArray = [];

// class for create news products (in the form of an object)
class product {
    constructor(name, quiantityStarting, quantitySold, quantitySupplied) {
        this.name = name;
        this.quiantityStarting = quiantityStarting;
        this.quantitySold = quantitySold;
        this.quantitySupplied = quantitySupplied;
        this.finalStock = 0;
    }
    // Final stock calculator 
    calculateEndingStock() {
        this.finalStock = this.quiantityStarting + this.quantitySupplied - this.quantitySold;
    }
    
    showResult() {
        console.log("Initial stock of " + this.name + ": " + this.quiantityStarting);
        console.log("Units sold: " + this.quantitySold);
        console.log("Replenished units of " + this.name + ": " + this.quantitySupplied);
        console.log("Total stock of " + this.name + ": " + this.finalStock);
    }
}

//Function to add a product
function addProduct () {
   let name = prompt("Please, enter the product name:");
   let quiantityStarting = prompt("Initial amount of product:");
   let quantitySold = prompt("Number of units sold: ");
   let quantitySupplied = prompt("Number of resupplied units:");
};

//This causes a new object to be created from the data collected at the prompt and then pushed to the empty "products Array"
let createNewProducts = new product(name, quiantityStarting, quantitySold, quantitySupplied);
productsArray.push(createNewProducts);

//logic and main function of the inventory manager
function inventoryManager() {
    //add more products
    let addMoreproducts = true; 
    while(addMoreproducts) { 
        //as long as "addmoreproducts" is true, it will run the add products message, if the option is not yes, the loop stops running
        addMoreproducts();
        let opcion = prompt("Do you want add other product? (yes/no)");
        if (opcion !== "yes") {
            addMoreproducts = false;
        }
    }
    //processes the products, looping through each of them and returning the stock and the result
    for (let i = 0; i < product.length; i++) {
        let product = productsArray[i];
        product.calculateEndingStock();
        product.showResult();
    }
};

inventoryManager();





