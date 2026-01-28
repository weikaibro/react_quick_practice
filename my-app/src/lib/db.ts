/**
 * Database Connection Module
 * Manages PostgreSQL database connections and queries
 */

import { Pool, QueryResult } from 'pg';

/**
 * Item Interface
 * @interface Item
 * @property {number} id - Unique identifier for the item
 * @property {string} name - Name of the item
 * @property {number} price - Price of the item
 * @property {string} created_at - Creation timestamp
 * @property {string} updated_at - Last update timestamp
 */
export interface Item {
  id: number;
  name: string;
  price: number;
  created_at?: string;
  updated_at?: string;
}

/**
 * Create PostgreSQL connection pool
 * Reuses connections for better performance
 */
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

/**
 * Retrieves all items from the database
 * @async
 * @function getItems
 * @returns {Promise<Item[]>} Array of all items in the database
 */
export const getItems = async (): Promise<Item[]> => {
  const result: QueryResult<Item> = await pool.query(
    'SELECT id, name, price, created_at, updated_at FROM items ORDER BY id'
  );
  return result.rows;
};

/**
 * Adds a new item to the database
 * @async
 * @function addItem
 * @param {string} name - The name of the item to add
 * @param {number} price - The price of the item to add
 * @returns {Promise<Item>} The newly created item
 */
export const addItem = async (name: string, price: number): Promise<Item> => {
  const result: QueryResult<Item> = await pool.query(
    'INSERT INTO items (name, price) VALUES ($1, $2) RETURNING id, name, price, created_at, updated_at',
    [name, price]
  );
  return result.rows[0];
};

/**
 * Deletes an item from the database
 * @async
 * @function deleteItem
 * @param {number} id - The ID of the item to delete
 * @returns {Promise<boolean>} True if deletion was successful
 */
export const deleteItem = async (id: number): Promise<boolean> => {
  const result: QueryResult = await pool.query(
    'DELETE FROM items WHERE id = $1',
    [id]
  );
  return result.rowCount !== null && result.rowCount > 0;
};

/**
 * Updates an item in the database
 * @async
 * @function updateItem
 * @param {number} id - The ID of the item to update
 * @param {string} name - The new name for the item
 * @param {number} price - The new price for the item
 * @returns {Promise<Item>} The updated item
 */
export const updateItem = async (
  id: number,
  name: string,
  price: number
): Promise<Item> => {
  const result: QueryResult<Item> = await pool.query(
    'UPDATE items SET name = $1, price = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING id, name, price, created_at, updated_at',
    [name, price, id]
  );
  return result.rows[0];
};