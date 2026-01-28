"use client"
/**
 * Mainpage Component
 * A simple counter page that allows incrementing and decrementing a count value
 * Demonstrates basic React state management with useState hook
 */
import { useState } from "react"

/**
 * Mainpage Component
 * Displays a counter with increment and decrement buttons
 * The counter value is managed using React state (useState hook)
 * 
 * @component
 * @function Mainpage
 * @returns {JSX.Element} A counter interface with buttons and count display
 */
export default function Mainpage() {
    const [count, setCount] = useState<number>(0)
    
    return (
        <>
            <div>213</div>
            <button onClick={() => setCount(count - 1)}>-</button>
            <div>{ count }</div>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    )
}
