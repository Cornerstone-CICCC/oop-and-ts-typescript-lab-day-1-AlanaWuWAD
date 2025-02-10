"use strict";
// 🍎 Create an Inventory System where items can be added, updated, and checked for stock.
// 1. Create a tuple type called ItemDetails which holds (string, number, boolean) representing itemName, quantity, and isAvailable.
// 2. Create a type alias called InventoryItem which contains: itemId (number), details (ItemDetails).
// 3. Create a function called addItem which adds an item to the inventory array. The function needs to return an InventoryItem object.
// 4. Create a function called updateStock which updates the quantity of an item. The return needs to be a string.
// 5. Create a function called checkStock which returns true if the item is available and false otherwise.
var inventory = [];
function addItem(itemId, itemName, quantity, isAvailable) {
    inventory.push({
        itemId: itemId,
        details: [itemName, quantity, isAvailable]
    });
    return inventory;
}
function updateStock(itemId, quantity) {
    var updateItem = "";
    inventory.forEach(function (item) {
        console.log('foreach', item);
        if (item.itemId === itemId) {
            item.details[1] = quantity;
            updateItem = "Stock updated for ".concat(item.details[0], ", new quantity: ").concat(item.details[1]);
        }
    });
    return updateItem;
}
function checkStock(itemId) {
    var checkResult = false;
    inventory.forEach(function (item) {
        if (item.itemId === itemId) {
            item.details[1] > 0 ? checkResult = true : checkResult = false;
        }
    });
    return checkResult;
}
// Test cases (Create more if needed)
console.log(addItem(1, "Laptop", 5, true)); // { itemId: 1, details: ["Laptop", 5, true] }
console.log(updateStock(1, 3)); // "Stock updated for Laptop, new quantity: 3"
console.log(checkStock(1)); // true
