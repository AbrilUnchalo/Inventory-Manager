// array to load products
let productsArray = [];
// Add the row to the table
const stockTableBody = document.getElementById("stockTableBody");
// saves products with json
const storedProducts = JSON.parse(localStorage.getItem("Product"));

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
		quantitySupplieds: 0 
	});

	
	showTable();


	localStorage.setItem("Product", JSON.stringify(storedProducts));

	//use library toastify for 
	Toastify({
        text: "Product added successfully!",
        duration: 3000, // 3 seconds
        gravity: "center", // Center the notification vertically and horizontally
        position: "center", // Position the notification at the center
        backgroundColor: "pink",
        stopOnFocus: true, // Stop auto-close when the user focuses on the notification
        style: {
            fontSize: "4rem" // Increase the font size for a larger notification
        }
    }).showToast();
});


const showTable = () => {
	stockTableBody.innerHTML = "";
	storedProducts.forEach((product) => {
		newProduct(product);
	});
};

function deleteProduct(id) {
	const productIndex = storedProducts.findIndex(product => product.id === id);
	if (productIndex !== -1) {
		storedProducts.splice(productIndex, 1);
		showTable();
		saveProductsToLocalStorage();
	}
}


// function for add products to the table
function newProduct(product) {
	const newRow = document.createElement("tr");

	// Create cells for each product detail
	const productId = document.createElement("td");
	const productNameCell = document.createElement("td");
	const productInitialStock = document.createElement("td");
	const usedCell = document.createElement("td");
	const suppliedCell = document.createElement("td");
	const finalStockCell = document.createElement("td");

    //Inputs for calculate final stock
    const usedInput = document.createElement("input");
    usedInput.type = "number";
	usedInput.value = product.quantityUsed || 0; // Set initial value
    usedCell.appendChild(usedInput);
    
	const suppliedInput = document.createElement("input");
    suppliedInput.type = "number";
	suppliedInput.value = product.quantitySupplied || 0;
  	suppliedCell.appendChild(suppliedInput);

	// Set the cell values
	productId.textContent = product.id;
	productNameCell.textContent = product.name;
	productInitialStock.textContent = product.quantityStarting;
	finalStockCell.textContent = product.finalStock || 0;

	// Append cells to the row
	newRow.appendChild(productId);
	newRow.appendChild(productNameCell);
	newRow.appendChild(productInitialStock)
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

	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";
	deleteButton.className = "deleteProductButton";

	deleteButton.addEventListener("click", () => {
		deleteProduct(product.id);
	});

	newRow.appendChild(deleteButton);
}
	
showTable();

// Load initial products if localStorage is empty
if (!localStorage.getItem("Product")) {
	fetch("initialProducts.json")
	  .then(response => response.json())
	  .then(initialProducts => {
		storedProducts.push(...initialProducts);
		localStorage.setItem("Product", JSON.stringify(storedProducts));
		showTable();
	  })
	  .catch(error => {
		console.error("Error loading initial products:", error);
	  });
  } else {
	showTable();
  }


//buttons

//fuction for delete all products of the table

function deleteAllProducts() {
	storedProducts.length = 0; 
	localStorage.removeItem("Product");
	showTable()
}

//action

const deleteAllButton = document.getElementById("deleteBtn");
deleteAllButton.addEventListener("click", deleteAllProducts);

