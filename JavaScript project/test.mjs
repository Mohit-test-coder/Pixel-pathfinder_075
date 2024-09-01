// Importing the inventory instance from app.mjs
import inventory from './app.mjs'; // This line imports the default export from 'app.mjs', which is assumed to be an instance of the Inventory class.

// Testing the Inventory class by logging outputs to the console
console.log('--- Searching Items ---'); // This logs a section header to the console indicating the start of item search tests.

// Searching for an item by name
console.log(inventory.searchByName('iPhone 13')); 
// This line calls the 'searchByName' method on the 'inventory' instance with 'iPhone 13' as the argument.
// It logs the search results for items with the name 'iPhone 13' to the console.

// Searching for items by category
console.log(inventory.searchByCategory('Laptops')); 
// This line calls the 'searchByCategory' method on the 'inventory' instance with 'Laptops' as the argument.
// It logs the search results for items in the 'Laptops' category to the console.

// Attempting to search for an item by name that is not present
console.log(inventory.searchByName('iPad')); 
// This line calls the 'searchByName' method on the 'inventory' instance with 'iPad' as the argument.
// It logs the search results for items with the name 'iPad' to the console. Since the item is not found, it should return an empty result or a message indicating no items found.

// Attempting to search for items by a category that is not present
console.log(inventory.searchByCategory('Tablets')); 
// This line calls the 'searchByCategory' method on the 'inventory' instance with 'Tablets' as the argument.
// It logs the search results for items in the 'Tablets' category to the console. Since the category is not found, it should return an empty result or a message indicating no items found.

console.log('--- Inventory Report ---'); 
// This logs a section header to the console indicating the start of the inventory report.

// Generating and logging the inventory report
console.log(inventory.generateReport()); 
// This line calls the 'generateReport' method on the 'inventory' instance.
// It logs a summary report of the inventory to the console, which may include total items, categories, stock levels, etc.
