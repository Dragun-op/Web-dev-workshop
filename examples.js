
//====================================================================
//  A Journey into JavaScript Magic - All Example Code Snippets 🧙‍♂️
//====================================================================
//  Instructions:
//  1. Copy this entire script.
//  2. Paste it into your browser's console (F12) or an online
//     JavaScript playground like CodePen or JSFiddle.
//  3. Uncomment the sections you want to test one by one.
//     (To uncomment, remove the /* and */ marks or highlight
//      the code and press Ctrl + /)
//====================================================================


// ===================================================================
// == Chapter 1: Enrolling at Hogwarts - Variables & Data Types ==
// ===================================================================
console.log("--- Chapter 1: Variables & Data Types ---");

// Using let for our changing fortune
let galleons = 50;
galleons = galleons - 7; // Bought a new wand!
console.log("Galleons after buying a wand:", galleons); // Outputs: 43

// Using const for things that stay the same
const wizardName = "Hermione Granger";
const birthYear = 1979;
console.log("Wizard:", wizardName, "Born:", birthYear);

// This would cause an error! Uncomment to see.
// wizardName = "Ron Weasley";

// Primitive Data Types
const spell = "Expecto Patronum"; // String
let slytherinPoints = 312; // Number
let hasFoundHorcrux = true; // Boolean
let voldemortsNose = null; // Null
let futureProphecy; // Undefined
console.log("A future prophecy is currently:", futureProphecy);

// Complex Artifacts: Objects
const transaction1 = {
  item: "New Wand from Ollivanders",
  type: "expense",
  amount: 7,
  shop: "Ollivanders",
  isMagical: true
};
console.log("First Transaction Item:", transaction1.item);

// You can add new properties to a const object
transaction1.date = "31-07-1991";
console.log("Transaction 1 with date:", transaction1);


// ===================================================================
// == Chapter 2: Potions Class - Expressions & Operators ==
// ===================================================================
console.log("\n--- Chapter 2: Expressions & Operators ---");

// Arithmetic Operators
let ingredients = 10;
let cauldronSize = 3;
let remainder = ingredients % cauldronSize;
console.log(`Leftover ingredients: ${remainder}`); // Outputs: 1

let housePoints = 100;
housePoints++; // Gryffindor gets a point!
console.log("House points are now:", housePoints); // Outputs: 101

// Comparison Operators
let harryPowerLevel = 100;
let malfoyPowerLevel = "100"; // Note: this is a string!
console.log("harryPowerLevel == malfoyPowerLevel:", harryPowerLevel == malfoyPowerLevel);   // true (loose equality)
console.log("harryPowerLevel === malfoyPowerLevel:", harryPowerLevel === malfoyPowerLevel);  // false (strict equality - better!)

// Logical Operators
let age = 17;
let hasPermissionSlip = true;
let canVisitHogsmeade = (age >= 17) || hasPermissionSlip;
console.log(`Can visit Hogsmeade? ${canVisitHogsmeade}`); // Outputs: true


// ===================================================================
// == Chapter 3: The Sorting Hat - Conditional Statements ==
// ===================================================================
console.log("\n--- Chapter 3: Conditional Statements ---");

// if, else if, else
let primaryTrait = "Bravery";
let house;

if (primaryTrait === "Bravery") {
  house = "Gryffindor";
} else if (primaryTrait === "Cunning") {
  house = "Slytherin";
} else if (primaryTrait === "Wisdom") {
  house = "Ravenclaw";
} else {
  house = "Hufflepuff";
}
console.log(`The Sorting Hat places you in... ${house}!`);

// Ternary Operator
let isOver18 = true;
let action = isOver18 ? "You can drive" : "You cannot drive";
console.log("Ternary Operator says:", action);

// switch Statement
let potionStatus = "brewing";
switch (potionStatus) {
  case "brewing":
    console.log("The potion is bubbling. Be patient.");
    break;
  case "ready":
    console.log("The potion is ready to be bottled!");
    break;
  default:
    console.log("No potion in the cauldron.");
}


// ===================================================================
// == Chapter 4: Charms Class - Strings and Their Methods ==
// ===================================================================
console.log("\n--- Chapter 4: Strings ---");

let messySpell = "  Wingardium Leviosa!  ";
console.log("Length of messy spell:", messySpell.length); // 23
let cleanSpell = messySpell.trim();
console.log("Cleaned spell:", cleanSpell); // "Wingardium Leviosa!"
let loudSpell = cleanSpell.toUpperCase();
console.log("Loud spell:", loudSpell); // "WINGARDIUM LEVIOSA!"
let firstWord = cleanSpell.slice(0, 10);
console.log("First word of spell:", firstWord); // "Wingardium"

// Template Literals
let wizard = "Harry";
let wizardHouse = "Gryffindor";
let greetingNew = `Hello, ${wizard} of house ${wizardHouse}.
Welcome!`; // It respects the new line!
console.log(greetingNew);


// ===================================================================
// == Chapter 5: Defense Against the Dark Arts - Loops & Functions ==
// ===================================================================
console.log("\n--- Chapter 5: Loops & Functions ---");

// for loop
console.log("Summoning 5 bats:");
for (let i = 1; i <= 5; i++) {
  console.log(`...Summoning bat number ${i}...`);
}

// for...of loop
const potionIngredients = ["Beetle eyes", "Bat spleen", "Dragon heartstring"];
for (const ingredient of potionIngredients) {
  console.log(`Adding ${ingredient} to the cauldron.`);
}

// for...in loop (for objects)
const wizardProfile = { name: "Luna Lovegood", house: "Ravenclaw", patronus: "Hare" };
for (const key in wizardProfile) {
  console.log(`${key}: ${wizardProfile[key]}`);
}

// Function
function calculateTotalCost(galleons, sickles, knuts) {
  const totalKnuts = (galleons * 17 * 29) + (sickles * 29) + knuts;
  return totalKnuts; // 'return' sends a value back
}
let shoppingTripCost = calculateTotalCost(5, 10, 15);
console.log(`Your total shopping cost in Knuts is: ${shoppingTripCost}`);


// ===================================================================
// == Chapter 6: The Library - Arrays and Their Methods ==
// ===================================================================
console.log("\n--- Chapter 6: Arrays ---");

let gringottsVault = [
  { item: "Advanced Potion-Making", type: "expense", amount: 12 },
  { item: "Triwizard Tournament Winnings", type: "income", amount: 1000 },
  { item: "Bertie Bott's Beans", type: "expense", amount: 2 }
];

// push (add to end)
gringottsVault.push({ item: "Butterbeer", type: "expense", amount: 1 });
console.log("Vault after buying Butterbeer:", gringottsVault);

// pop (remove from end)
gringottsVault.pop();
console.log("Vault after 'pop':", gringottsVault);

// filter (create a new array with items that pass a test)
const allExpenses = gringottsVault.filter(transaction => {
  return transaction.type === 'expense';
});
console.log("All expenses:", allExpenses);

// map (create a new array by transforming each item)
const itemNames = gringottsVault.map(transaction => {
  return transaction.item;
});
console.log("List of item names:", itemNames);

// reduce (boil an array down to a single value)
const totalExpenses = allExpenses.reduce((accumulator, currentTransaction) => {
  return accumulator + currentTransaction.amount;
}, 0); // 0 is the starting value
console.log(`Total amount spent: ${totalExpenses} Galleons`);


// ===================================================================
// == Chapter 7: Divination - Using the Browser Console ==
// ===================================================================
console.log("\n--- Chapter 7: Browser Console ---");

console.warn("Careful! The Whomping Willow seems agitated today.");
console.error("Critical Error: Potion has exploded!");
console.table(gringottsVault); // Displays the vault array as a neat table!

/*
// Uncomment these lines in the browser console to see the pop-ups!

alert("The Hogwarts Express is leaving soon!");

const password = prompt("What is the password for the Gryffindor common room?");
console.log(`You entered: ${password}`);

const wantsToEnter = confirm("Are you sure you wish to enter the Forbidden Forest?");
if (wantsToEnter) {
  console.log("You step into the dark woods...");
} else {
  console.log("You wisely turn back.");
}
*/


// ===================================================================
// == Chapter 8: The Marauder's Map - The DOM ==
// ===================================================================
console.log("\n--- Chapter 8: The DOM ---");
console.log("DOM manipulation code needs to be run on a page with HTML.");
console.log("Open one of the project's HTML files and check the console there!");
console.log("The Gringotts Ledger project file (app.js) is the best example for this chapter.");