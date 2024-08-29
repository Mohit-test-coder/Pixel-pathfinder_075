// Inventory.js

// Define the Inventory class to manage the inventory of items
class Inventory {
    // The constructor initializes an empty array to store items
    constructor() {
        this.items = []; // Initialize an empty array to hold the inventory items
    }

    // Method to add a new item to the inventory
    addItem(name, category, quantity) {
        // Create an object representing the new item with the provided name, category, and quantity
        const item = {
            name: name,         // The name of the item (e.g., "iPhone 13")
            category: category, // The category of the item (e.g., "Mobile Phones")
            quantity: quantity  // The initial quantity of the item (e.g., 50 units)
        };
        // Add the new item object to the items array
        this.items.push(item);
        // Log a message to the console indicating that the item was added
        console.log(`Item added: ${name}`);
    }

    // Method to update the quantity of an existing item in the inventory
    updateQuantity(name, newQuantity) {
        // Find the item in the items array that matches the provided name
        const item = this.items.find(item => item.name === name);
        // If the item is found, update its quantity
        if (item) {
            item.quantity = newQuantity; // Update the item's quantity with the new value
            // Log a message to the console indicating that the quantity was updated
            console.log(`Quantity updated for ${name}: ${newQuantity}`);
        } else {
            // If the item is not found, log a message indicating that the item was not found
            console.log(`Item not found: ${name}`);
        }
    }

    // Method to remove an item from the inventory based on its name
    removeItem(name) {
        // Find the index of the item in the items array that matches the provided name
        const index = this.items.findIndex(item => item.name === name);
        // If the item is found (index is not -1), remove it from the array
        if (index !== -1) {
            this.items.splice(index, 1); // Remove the item from the array at the found index
            // Log a message to the console indicating that the item was removed
            console.log(`Item removed: ${name}`);
        } else {
            // If the item is not found, log a message indicating that the item was not found
            console.log(`Item not found: ${name}`);
        }
    }

    // Method to search for items in the inventory by name
    searchByName(name) {
        // Use the filter method to find all items that match the provided name (case-insensitive)
        const result = this.items.filter(item => item.name.toLowerCase() === name.toLowerCase());
        // If matching items are found, return them; otherwise, return a message indicating no items were found
        return result.length ? result : `No items found with the name: ${name}`;
    }

    // Method to search for items in the inventory by category
    searchByCategory(category) {
        // Use the filter method to find all items that match the provided category (case-insensitive)
        const result = this.items.filter(item => item.category.toLowerCase() === category.toLowerCase());
        // If matching items are found, return them; otherwise, return a message indicating no items were found
        return result.length ? result : `No items found in the category: ${category}`;
    }

    // Method to generate a report of all items in the inventory
    generateReport() {
        // Use the map method to format each item as a string showing its name, category, and quantity
        const report = this.items.map(item => `${item.name} (${item.category}): ${item.quantity} in stock`).join('\\n');
        // If there are items in the inventory, return the formatted report; otherwise, return a message indicating no items
        return report ? report : 'No items in inventory.';
    }
}

// Export the Inventory class as the default export of this module
export default Inventory;

/*
Explanation of the Code:
1.Class Definition (Inventory):
The Inventory class is designed to manage a collection of items. Each item has a name, category, and quantity.

2.Constructor (constructor()):
The constructor method initializes an empty array items to store the items in the inventory.

Adding Items (addItem):
The addItem(name, category, quantity) method creates a new item object with the specified name, category, and quantity.
This item is then added to the items array.
A confirmation message is logged to the console.

3.Updating Quantities (updateQuantity):
The updateQuantity(name, newQuantity) method searches the items array for an item with a matching name.
If the item is found, its quantity is updated to newQuantity.
If the item is not found, a message is logged to indicate that the item does not exist.

4.Removing Items (removeItem):
The removeItem(name) method searches the items array for an item with the given name.
If the item is found, it is removed from the array.
If the item is not found, a message is logged to indicate that the item does not exist.

5.Searching for Items by Name (searchByName):
The searchByName(name) method returns all items that match the given name (case-insensitive).
If no matching items are found, a message is returned indicating this.

6.Searching for Items by Category (searchByCategory):
The searchByCategory(category) method returns all items that match the given category (case-insensitive).
If no matching items are found, a message is returned indicating this.

7.Generating Reports (generateReport):
The generateReport() method formats each item in the inventory as a string showing its name, category, and quantity.
If the inventory is not empty, the method returns a formatted report. If the inventory is empty, a message is returned indicating that no items are in the inventory.

8.Exporting the Class:
The Inventory class is exported as the default export from the module, so it can be imported and used in other files.
*/
