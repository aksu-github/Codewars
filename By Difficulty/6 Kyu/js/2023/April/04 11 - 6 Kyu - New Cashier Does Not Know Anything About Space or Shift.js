/*
Instruction:

*/

//  My Solution

const menu = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"];
const capitalize = word => word[0].toUpperCase() + word.slice(1);
const comparator = (a, b) => menu.indexOf(a) - menu.indexOf(b);

function getOrder(input) {
  return input.match(new RegExp(menu.join("|"), "ig")).map(capitalize).sort(comparator).join(" ");
}