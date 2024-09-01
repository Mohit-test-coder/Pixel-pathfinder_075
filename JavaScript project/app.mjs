// app.js

// Importing the Inventory class from the Inventory.js file.
// The Inventory class will be used to manage the inventory.
import Inventory from './Inventory.mjs';

// Creating an instance of the Inventory class.
// This instance will hold and manage the inventory items.
const inventory = new Inventory();

// Adding items to the inventory using the addItem method.
// Each call to addItem adds a new item with a specified name, category, and quantity.
inventory.addItem('iPhone 13', 'Mobile Phones', 50); // Adding 50 units of iPhone 13 to the Mobile Phones category
inventory.addItem('Samsung Galaxy S21', 'Mobile Phones', 30); // Adding 30 units of Samsung Galaxy S21 to the Mobile Phones category
inventory.addItem('MacBook Pro', 'Laptops', 20); // Adding 20 units of MacBook Pro to the Laptops category

// Updating the quantity of an existing item using the updateQuantity method.
// This updates the quantity of iPhone 13 from 50 to 45 units.
inventory.updateQuantity('iPhone 13', 45);

// Removing an item from the inventory using the removeItem method.
// This removes the Samsung Galaxy S21 item from the inventory.
inventory.removeItem('Samsung Galaxy S21');

// Searching for an item by name using the searchByName method.
// This searches for the item named 'iPhone 13' in the inventory and logs the result to the console.
console.log(inventory.searchByName('iPhone 13'));

// Exporting the inventory instance so it can be used in other files, such as for testing.
// This allows the inventory instance to be shared and manipulated in other parts of the application.
export default inventory;

/*
1.Importing the Inventory Class:
The Inventory class is imported from the Inventory.mjs file. This class is responsible for managing the inventory, including adding, updating, removing items, and more.

2.Creating an Instance of the Inventory Class:
An instance of the Inventory class is created using const inventory = new Inventory();. This instance will be used to perform operations on the inventory, such as adding and managing items.

3.Adding Items to the Inventory:
The addItem() method is used to add new items to the inventory. Each item is defined by its name, category, and quantity.
For example, inventory.addItem('iPhone 13', 'Mobile Phones', 50); adds 50 units of the iPhone 13 to the inventory under the "Mobile Phones" category.

4.Updating the Quantity of an Existing Item:
The updateQuantity() method updates the quantity of an existing item. For example, inventory.updateQuantity('iPhone 13', 45); updates the quantity of the iPhone 13 from 50 to 45 units.

5.Removing an Item from the Inventory:
The removeItem() method removes an item from the inventory. For example, inventory.removeItem('Samsung Galaxy S21'); removes the Samsung Galaxy S21 from the inventory.

.Searching for an Item by Name:
The searchByName() method searches for an item in the inventory by its name. The result is logged to the console using console.log(). For example, console.log(inventory.searchByName('iPhone 13')); searches for the iPhone 13 in the inventory and prints the result.

7.Exporting the Inventory Instance:
The inventory instance is exported using export default inventory;, allowing it to be used in other files (e.g., for testing). This export makes the inventory instance accessible across different parts of the application.
*/