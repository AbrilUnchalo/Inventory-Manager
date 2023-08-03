// array to load products
let productsArray = [];
// Add the row to the table
const stockTableBody = document.getElementById("stockTableBody");
// saves products with json
const storedProducts = JSON.parse(localStorage.getItem("Product")) || [
	{
		id: 1,
		name: "banana",
		quantityStarting: 0, 
		quantityUsed: 0, 
		quantitySupplieds: 0
	},

	{
		id: 2,
		name: "orange",
		quantityStarting: 0, 
		quantityUsed: 0, 
		quantitySupplieds: 0
	},
];

// class for creating new products (in the form of an object)
class Product {
	constructor(id, name, quantityStarting, quantityUsed, quantitySupplied) {
		this.id = id;
		this.name = name;
		this.quantityStarting = parseInt(quantityStarting);
		this.quantityUsed = parseInt(quantityUsed);
		this.quantitySupplied = parseInt(quantitySupplied);
		this.finalStock = this.quantityStarting + this.quantitySupplied - this.quantityUsed;
	}
}

let lastUsedId = storedProducts.reduce((maxId, product) => Math.max(maxId, product.id), 0);

// function for capturing new product data
document.getElementById("saveProduct").addEventListener("submit", (e) => {
	e.preventDefault();
	const nameInput = document.getElementById("productName").value;
	const initialStockInput = parseInt(document.getElementById("initialStock").value);
	console.log(nameInput, initialStockInput);

	lastUsedId++;

	storedProducts.push({
		id: lastUsedId,
		 name: nameInput,
		  quantityStarting: initialStockInput,
		   quantityUsed: 0,
		    quantitySupplieds: 0 });

	console.log(storedProducts);
	showTable();


	localStorage.setItem("Product", JSON.stringify(storedProducts));
});

const showTable = () => {
	stockTableBody.innerHTML = "";
	storedProducts.forEach((product) => {
		newProduct(product);
	});
};

// function for add products to the table
function newProduct(product) {
	const newRow = document.createElement("tr");

	// Create cells for each product detail
	const productId = document.createElement("td");
	const productNameCell = document.createElement("td");
	const usedCell = document.createElement("td");
	const suppliedCell = document.createElement("td");
	const finalStockCell = document.createElement("td");

    //Inputs for calculate final stock
    const usedInput = document.createElement("input");
    usedInput.type = "number";
	usedInput.value = product.quantityUsed; // Set initial value
    usedCell.appendChild(usedInput);
    
	const suppliedInput = document.createElement("input");
    suppliedInput.type = "number";
	suppliedInput.value = product.quantitySupplied;
  	suppliedCell.appendChild(suppliedInput);

	// Set the cell values
	productId.textContent = product.id;
	productNameCell.textContent = product.name;
	finalStockCell.textContent = product.finalStock;

	// Append cells to the row
	newRow.appendChild(productId);
	newRow.appendChild(productNameCell);
	newRow.appendChild(usedCell);
	newRow.appendChild(suppliedCell);
	newRow.appendChild(finalStockCell);

	
	stockTableBody.appendChild(newRow);

	// event listeners to inputs to calculate and update final stock
	  usedInput.addEventListener("input", () => {
		product.quantityUsed = parseInt(usedInput.value);
		product.finalStock = product.quantityStarting + product.quantitySupplied - product.quantityUsed;
		finalStockCell.textContent = product.finalStock;
		
	  });
	
	  suppliedInput.addEventListener("input", () => {
		product.quantitySupplied = parseInt(suppliedInput.value);
		product.finalStock = product.quantityStarting + product.quantitySupplied - product.quantityUsed;
		finalStockCell.textContent = product.finalStock;
		
	  });
	}



showTable();
