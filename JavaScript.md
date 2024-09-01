# Pixel-pathfinders_075Inventory Management System
Introduction
The Inventory Management System is a Node.js application designed to manage the inventory of items, such as mobile phones, in a store or warehouse. The system allows users to add items, update their quantities, remove items, search for items by name or category, and generate detailed inventory reports. This project demonstrates the application of JavaScript classes, ES6 syntax, and modular code management.

Project Type
Backend

Deployed App
Currently, this project does not have a deployed version. It is a local Node.js application intended for local development and testing.

Directory Structure
Copy code
inventory-management/
├─ Inventory.js
├─ app.js
├─ test.js
|--package.json

Features
Add Items: Add new items to the inventory with properties like name, category, and quantity.

Update Item Quantity: Update the quantity of an existing item based on its name.

Remove Items: Remove an item from the inventory by name.

Search by Name: Search for items in the inventory by their name (case-insensitive).

Search by Category: Search for items in the inventory by their category (case-insensitive).

Generate Report: Generate a detailed report of all items in the inventory, showing their name, category, and quantity.

Design Decisions or Assumptions
Modular Code: The application is modularized with the Inventory class in a separate file for better code management.

ES6 Syntax: The project utilizes ES6 import/export syntax for module management.

Case-Insensitive Search: The search methods are case-insensitive for both item names and categories.

Hard-Coded Data: Example data is hard-coded within the system for demonstration and testing purposes.

Installation & Getting Started

Clone the repository:
bash
git clone https://github.com/Mohit-test-coder/Pixel-pathfinder.git

Navigate into the project directory:
bash
cd p

Install Node.js if not already installed.
Initialize the project:
bash
npm init -y

Create the necessary files (Inventory.js, app.js, test.js) and add the code as described in the instructions.
Usage
Run the application:
bash
node app.js

Test the functionality:
bash
node test.js
Include screenshots or example outputs as necessary.

Credentials
For authenticated pages (if applicable), provide user credentials here.

APIs Used
No external APIs are used in this project.

API Endpoints
This project does not include an API as it is a local Node.js application.

Technology Stack
Node.js: JavaScript runtime used for building the application.
JavaScript: Programming language used to develop the backend logic.
ES6 Modules: For modular code management.

Code Structure and Testing
Inventory Class: Defined in Inventory.js, this class manages all inventory-related logic, including adding, updating, removing, and searching for items.
Main Script: app.js initializes the system and executes methods from the Inventory class.
Testing: test.js contains test cases to verify the functionality of methods in the Inventory class.

Commenting
Detailed comments are included throughout the code to explain functionality, including the use of higher-order functions.
