// array to load products
let productsArray = [];

// saves products with json
const storedProducts = JSON.parse(localStorage.getItem("Product")) || [];

// class for creating new products (in the form of an object)
class Product {
    constructor(name, quantityStarting, quantityUsed, quantitySupplied) {
        this.name = name;
        this.quantityStarting = parseInt(quantityStarting);
        this.quantityUsed = parseInt(quantityUsed);
        this.quantitySupplied = parseInt(quantitySupplied);
        this.finalStock = this.quantityStarting + this.quantitySupplied - this.quantityUsed;
    }
}
    

// function for capturing new product data
document.getElementById("saveProduct").addEventListener ("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("productName").value;
    const initialStockInput = parseInt(document.getElementById("initialStock").value);
    console.log(nameInput, initialStockInput);
    storedProducts.push({ name: nameInput, initialStockInput: initialStockInput, quantityUsed: 0, quantitySupplieds: 0 });
	console.log(storedProducts);

}) 


// function for add products to the table
 function newProduct (name, quantityStarting) {
    const newRow = document.createElement("tr");

    // Create cells for each product detail
  const productNameCell = document.createElement('td');
  const usedCell = document.createElement('td');
  const suppliedCell = document.createElement('td');
  const finalStockCell = document.createElement('td');

  // Set the cell values
  productNameCell.textContent = nameInput;
  usedCell.textContent = 0;
  suppliedCell.textContent = 0;
  finalStockCell.textContent = initialStock;

  // Append cells to the row
  newRow.appendChild(productNameCell);
  newRow.appendChild(usedCell);
  newRow.appendChild(suppliedCell);
  newRow.appendChild(finalStockCell);
 
 // Add the row to the table
 const stockTableBody = document.getElementById('stockTableBody');
 stockTableBody.appendChild(newRow);

 // saves products with json 
 const storedProducts = JSON.parse(localStorage.getItem('Product')) || [];
 storedProducts.push({ name: nameInput, initialStockInput: initialStockInput, quantityUsed: 0, quantitySupplieds: 0 });
 localStorage.setItem('products', JSON.stringify(storedProducts));
    }











