// array to load products
let productsArray = [];

// class for creating new products (in the form of an object)
class Product {
    constructor(name, quantityStarting, quantitySold, quantitySupplied) {
        this.name = name;
        this.quantityStarting = parseInt(quantityStarting);
        this.quantityUsed = parseInt(quantityUsed);
        this.quantitySupplied = parseInt(quantitySupplied);
        this.finalStock = parseInt(quantityStarting + quantitySupplied - quantityUsed);
    }
}
    

// function for capturing new product data
document.getElementById("addProduct").addEventListener ("click", () => {
    const nameInput = document.getElementById("productName").value;
    const initialStockInput = parseInt(document.getElementById("initialStock").value);
    console.log(nameInput, initialStockInput);
}) 


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
 

 // Add the row to the table
 const stockTableBody = document.getElementById('stockTableBody');
 stockTableBody.appendChild(newRow);

 // saves products with json 
 const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
 storedProducts.push({ name: nameInput, initialStockInput: initialStockInput, quantityUsed: 0, quantitySupplieds: 0 });
 localStorage.setItem('products', JSON.stringify(storedProducts));
    }

    productsArray.push(newProduct); //cambiar y hacer que para crear el nuevo producto solo haya que ingresar el nombre, el stock inicial y la descripcion 









