"use client"

interface ItemListProps {
  items: any[];
}

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