//Commeot out console logs to evaluate outputs one by one
//create the object constructor
class Shoes {
  constructor(name, product_code, quantity, value_per_item) {
    this.name = name;
    this.product_code = product_code;
    this.quantity = quantity;
    this.value_per_item = value_per_item;
  }
}

//create 5 new objects using the constructor
let shoe1 = new Shoes("Moccasin", "Stylish shoe", 20, 43.76);
let shoe2 = new Shoes("Sandal", "Summer shoe", 3, 15.59);
let shoe3 = new Shoes("Boot", "Durable shoe for all occasion", 45, 59.99);
let shoe4 = new Shoes("Clog", "Wooden shoe", 10, 21.0);
let shoe5 = new Shoes("Pump", "Elegant heels", 11, 32.32);

//push pbjects into an array
const shoesInventory = [];
shoesInventory.push(shoe1, shoe2, shoe3, shoe4, shoe5);

//display the array
// console.table(shoesInventory);

//Creat a function that uses shoe name as value to look throguh through the array
function whatShoe(array, name) {
  return array.find((item) => item.name === name);
}
// //Define the name of a shoe you're looking for when declaring the function, return undefined if no item found
//console.table(whatShoe(shoesInventory, "Sandal"));

//Create a function to return the lowest value item in the inventory
function lowValue(array) {
  array.sort((a, b) => a.value_per_item - b.value_per_item);
  return array[0];
}

//console.table(lowValue(shoesInventory));

//create a function to return the highest value item in the inventory
function highValue(array) {
  array.sort((a, b) => b.value_per_item - a.value_per_item);
  return array[0];
}

//console.table(highValue(shoesInventory));

//Create a function that iterates through the array
//Looks at the "name" as a keyword to locate the value and edit the property of the object
const editInventory = (array, id, propertyName, newValue) => {
  array.forEach((obj) => {
    if (obj.name === id) {
      obj[propertyName] = newValue;
    }
  });
  return array;
};

// To edit the name of the shoe
let nameEdit = editInventory(shoesInventory, "Sandal", "name", "Summer sandal");
//console.table(nameEdit);

// To edit the shoe code
let codeEdit = editInventory(shoesInventory, "Moccasin", "product_code", "ERB234");
//console.table(codeEdit);

// To edit the quantity
let propEdit = editInventory(shoesInventory, "Boot", "quantity", 74);
//console.table(propEdit);

// To edit the value per item
let valEdit = editInventory(shoesInventory, "Clog", "value_per_item", 15.99);
//console.table(valEdit);

//create a function to sort the Inventory by from the lowest to highest price using sort() method
function sortInventoryByValue(array) {
  array.sort((a, b) => a.value_per_item - b.value_per_item);
  return array;
}

let sortedInventory = sortInventoryByValue(shoesInventory);
//console.table(sortedInventory);
