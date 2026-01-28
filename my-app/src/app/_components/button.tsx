"use client"

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
 * ItemList Component Props Interface
 * @interface ItemListProps
 * @property {Array<Item>} items - Array of items to display in the list
 */
interface ItemListProps {
  items: Item[];
}

/**
 * ItemList Component
 * Displays a list of items with their names and prices
 * This is a client-side component that renders each item in a card format
 * 
 * @component
 * @function ItemList
 * @param {ItemListProps} props - Component props
 * @param {Array} props.items - Array of item objects to display
 * @returns {JSX.Element} A div containing the formatted list of items
 */
export default function ItemList({ items }: ItemListProps) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item.id} className="p-4 bg-white rounded border">
          <p className="font-semibold">{item.name}</p>
          <p className="text-gray-600">${item.price}</p>
        </div>
      ))}
    </div>
  );
}