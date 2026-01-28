/**
 * Mock Database Module
 * This module simulates a database with in-memory storage for items.
 * In a real application, this would connect to an actual database.
 */

/**
 * Interface representing an Item in the database
 * @interface Item
 * @property {number} id - Unique identifier for the item
 * @property {string} name - Name of the item
 * @property {number} price - Price of the item
 */
interface Item {
  id: number;
  name: string;
  price: number;
}

// In-memory array storing all items
const items: Item[] = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Phone", price: 599 },
  { id: 3, name: "Headphones", price: 199 },
];

// Counter to generate unique IDs for new items
let nextId = 4;

/**
 * Retrieves all items from the database
 * @function getItems
 * @returns {Item[]} Array of all items in the database
 */
export const getItems = (): Item[] => items;

/**
 * Adds a new item to the database
 * @function addItem
 * @param {string} name - The name of the item to add
 * @param {number} price - The price of the item to add
 * @returns {Item} The newly created item with an auto-generated ID
 */
export const addItem = (name: string, price: number): Item => {
  const newItem = { id: nextId++, name, price };
  items.push(newItem);
  return newItem;
};
