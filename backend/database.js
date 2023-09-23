const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'database.json');

// Read data from the database.json file
const readData = () => {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // Handle errors, e.g., file not found or invalid JSON
    return { Pantry: [] }; // Initialize as an empty array if the file is missing or empty
  }
};

// Write data to the database.json file
const writeData = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
};

// CRUD operations

// Create a new item (avoid duplicates by checking item name)
const createItem = (item) => {
  const data = readData();
  if (!data.Pantry) {
    data.Pantry = []; // Initialize "Pantry" as an empty array if it doesn't exist
  }
  
  // Check if an item with the same name already exists
  const existingItem = data.Pantry.find(existing => existing.Name === item.Name);
  if (existingItem) {
    console.log(`Item '${item.Name}' already exists. Not creating a duplicate.`);
  } else {
    data.Pantry.push(item);
    writeData(data);
    console.log(`Item '${item.Name}' was successfully added.`);
  }
};


// Read all items
const readItems = () => {
  return readData().Pantry;
};

// Update an item by name and amount
const updateItem = (name, newAmount) => {
  const data = readData();
  const itemIndex = data.Pantry.findIndex(item => item.Name === name);

  if (itemIndex !== -1) {
    data.Pantry[itemIndex].Quantity = newAmount;
    writeData(data);
    return true;
  }
  return false;
};


// Delete an item by name
const deleteItem = (name) => {
  const data = readData();
  const itemIndex = data.Pantry.findIndex(item => item.Name === name);

  if (itemIndex !== -1) {
    data.Pantry.splice(itemIndex, 1);
    writeData(data);
    return true;
  }
  return false;
};


module.exports = {
  createItem,
  readItems,
  updateItem,
  deleteItem,
};

const database = require('./database');

/* Create a new item */
const newItem = {
  Name: "New Ingredient",
  Quantity: "100 grams"
};
database.createItem(newItem);


database.deleteItem('Margarine');

// Function to check if an item exists in the Pantry by name
const doesItemExist = (itemName) => {
  const data = readData();
  if (data.Pantry) {
    // Check if an item with the given name exists in the Pantry
    return data.Pantry.some((item) => item.Name === itemName);
  }
  return false; // If Pantry doesn't exist or is empty, item does not exist
};

// Example usage:
const itemNameToCheck = "Milk"; // Replace with the item name you want to check
const itemExists = doesItemExist(itemNameToCheck);

if (itemExists) {
  console.log(`Item '${itemNameToCheck}' exists in the Pantry.`);
} else {
  console.log(`Item '${itemNameToCheck}' does not exist in the Pantry.`);
}




/* Read all items in the database */
const allItems = database.readItems();
console.log(allItems);

