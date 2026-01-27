"use client"
import { useState } from "react"

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
