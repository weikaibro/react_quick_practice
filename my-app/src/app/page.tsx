"use client"
/**
 * Home Page Component
 * Main landing page that displays a list of items and allows adding new items
 * Features server-side data fetching and client-side state management
 */
import { useState, useEffect } from "react";
import ItemList from "./_components/button";
import AddItemButton from "./_components/button2";

/**
 * Item Interface
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

/**
 * Home Component
 * Main page component that manages items list state and handles API interactions
 * 
 * @component
 * @function Home
 * @returns {JSX.Element} The rendered home page with items list and add button
 */
export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<number | undefined>(undefined);

  /**
   * useEffect hook to fetch items when component mounts
   * Runs only once due to empty dependency array
   */
  useEffect(() => {
    fetchItems();
  }, []);

  /**
   * Fetches all items from the API
   * @async
   * @function fetchItems
   * @returns {Promise<void>} Fetches items and updates state
   */
  const fetchItems = async () => {
    const res = await fetch("/api/items");
    const data = await res.json();
    setItems(data);
    setLoading(false);
  };

  /**
   * Handles adding a new item
   * Makes a POST request to create a new item and updates the local state
   * @async
   * @function handleAddItem
   * @returns {Promise<void>} Adds item and updates state
   */
  const handleAddItem = async () => {
    const res = await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: productName, price: productPrice }),
    });
    const newItem = await res.json();
    setItems([...items, newItem]);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <main className="max-w-2xl mx-auto">
        <AddItemButton onClick={handleAddItem} />
        <input className="border border-2 px-2 py-1 mr-2" type="text" value={productName} onChange={(e) => setProductName(e.target.value)} /> 
        <input className="border border-2 px-2 py-1 mr-2" type="number" value={productPrice ?? ""} onChange={(e) => setProductPrice(Number(e.target.value))}/>
        {loading ? <p>Loading...</p> : <ItemList items={items} />}
      </main>
    </div>
  );
}
