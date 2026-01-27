// Mock Database
interface Item {
  id: number;
  name: string;
  price: number;
}

let items: Item[] = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Phone", price: 599 },
  { id: 3, name: "Headphones", price: 199 },
];

let nextId = 4;

export const getItems = (): Item[] => items;

export const addItem = (name: string, price: number): Item => {
  const newItem = { id: nextId++, name, price };
  items.push(newItem);
  return newItem;
};
