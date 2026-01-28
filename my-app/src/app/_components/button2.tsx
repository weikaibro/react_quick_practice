"use client"

/**
 * AddItemButton Component Props Interface
 * @interface AddItemButtonProps
 * @property {Function} onClick - Callback function triggered when the button is clicked
 */
interface AddItemButtonProps {
  onClick: () => void;
}

/**
 * AddItemButton Component
 * A button component that triggers the creation of a new item when clicked
 * The button has styling with hover effects for better user experience
 * 
 * @component
 * @function AddItemButton
 * @param {AddItemButtonProps} props - Component props
 * @param {Function} props.onClick - Callback function to execute when button is clicked
 * @returns {JSX.Element} A styled button element with "Add Item" label
 */
export default function AddItemButton({ onClick }: AddItemButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mb-6"
    >
      Add Item
    </button>
  );
}