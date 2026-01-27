"use client"
import { useState, useEffect } from "react";
import ItemList from "./_components/button";
import AddItemButton from "./_components/button2";

interface Item {
  id: number;
  name: string;
  price: number;
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await fetch("/api/items");
    const data = await res.json();
    setItems(data);
    setLoading(false);
  };

  const handleAddItem = async () => {
    const res = await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "New Item", price: 99 }),
    });
    const newItem = await res.json();
    setItems([...items, newItem]);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <main className="max-w-2xl mx-auto">
        <AddItemButton onClick={handleAddItem} />
        {loading ? <p>Loading...</p> : <ItemList items={items} />}
      </main>
    </div>
  );
}
