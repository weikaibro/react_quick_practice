"use client"
import { useState, useEffect, useCallback } from "react"

// REACT KNOWLEDGE: Component Props Interface
// TypeScript interface defines the shape of props
interface TodoItem {
  id: number
  text: string
  completed: boolean
}

interface UserProfileProps {
  name: string
  age?: number // Optional prop
}

// REACT KNOWLEDGE: Child Component with Props
// Props are how you pass data from parent to child components
function UserProfile({ name, age = 25 }: UserProfileProps) {
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>User Profile</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

// REACT KNOWLEDGE: Main Component with Multiple Concepts
export default function ReactLearningPage() {
  // STATE MANAGEMENT
  // useState for simple state
  const [count, setCount] = useState<number>(0)
  const [name, setName] = useState<string>("")
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [newTodo, setNewTodo] = useState<string>("")
  
  // SIDE EFFECTS with useEffect
  // useEffect runs after component renders
  useEffect(() => {
    console.log("Component mounted or count changed:", count)
    
    // Cleanup function (optional)
    return () => {
      console.log("Cleanup for count:", count)
    }
  }, [count]) // Dependency array - effect runs when count changes
  
  // useEffect with empty dependency array - runs only once after mount
  useEffect(() => {
    console.log("Component mounted - runs only once")
    setName("React Learner")
  }, [])
  
  // MEMOIZED CALLBACKS with useCallback
  // useCallback prevents function recreation on every render
  const addTodo = useCallback(() => {
    if (newTodo.trim()) {
      const newItem: TodoItem = {
        id: Date.now(),
        text: newTodo,
        completed: false
      }
      setTodos(prev => [...prev, newItem]) // Spread operator for immutable update
      setNewTodo("") // Clear input
    }
  }, [newTodo])
  
  const toggleTodo = useCallback((id: number) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id 
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }, [])
  
  const deleteTodo = useCallback((id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }, [])
  
  // EVENT HANDLERS
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // Prevent page reload
    addTodo()
  }
  
  // CONDITIONAL RENDERING
  const renderTodoList = () => {
    if (todos.length === 0) {
      return <p>No todos yet. Add one above!</p>
    }
    
    return (
      <ul>
        {todos.map(todo => (
          // KEY PROP: React needs unique keys for list items
          <li key={todo.id} style={{ 
            textDecoration: todo.completed ? 'line-through' : 'none',
            margin: '5px 0'
          }}>
            <span onClick={() => toggleTodo(todo.id)} style={{ cursor: 'pointer' }}>
              {todo.completed ? '' : ''} {todo.text}
            </span>
            <button 
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: '10px', background: 'red', color: 'white' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    )
  }
  
  // JSX RETURN with all concepts
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React Learning Examples</h1>
      
      {/* COMPONENT COMPOSITION */}
      <UserProfile name={name} age={30} />
      
      {/* STATE AND EVENT HANDLING */}
      <section>
        <h2>Counter Example</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </section>
      
      {/* FORMS AND CONTROLLED COMPONENTS */}
      <section>
        <h2>Todo List (Forms & Lists)</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            placeholder="Enter a new todo"
            style={{ padding: '8px', marginRight: '10px' }}
          />
          <button type="submit">Add Todo</button>
        </form>
        
        {/* CONDITIONAL RENDERING & LISTS */}
        {renderTodoList()}
        
        {/* COMPUTED VALUES */}
        <p>
          Total todos: {todos.length} | 
          Completed: {todos.filter(t => t.completed).length} | 
          Remaining: {todos.filter(t => !t.completed).length}
        </p>
      </section>
      
      {/* INLINE STYLES & CSS-IN-JS */}
      {/* <section style={{ 
        backgroundColor: count > 5 ? 'lightgreen' : 'lightblue',
        padding: '10px',
        borderRadius: '5px',
        marginTop: '20px'
      }}>
        <h3>Dynamic Styling</h3>
        <p>Background changes when count > 5</p>
        {count > 10 && <p><� Count is over 10!</p>}
      </section> */}
      
      {/* {/* REACT CONCEPTS SUMMARY */}
      {/* <section style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h2>React Concepts Demonstrated:</h2>
        <ul>
          <li><strong>Components:</strong> Functional components with props</li>
          <li><strong>State:</strong> useState hook for managing component state</li>
          <li><strong>Effects:</strong> useEffect for side effects and lifecycle</li>
          <li><strong>Callbacks:</strong> useCallback for performance optimization</li>
          <li><strong>Events:</strong> onClick, onChange, onSubmit handlers</li>
          <li><strong>Forms:</strong> Controlled components with form handling</li>
          <li><strong>Lists:</strong> Rendering arrays with map() and keys</li>
          <li><strong>Conditional Rendering:</strong> && operator and ternary expressions</li>
          <li><strong>Styling:</strong> Inline styles and dynamic styling</li>
          <li><strong>TypeScript:</strong> Type safety with interfaces and generics</li>
          <li><strong>Immutability:</strong> Spread operator for state updates</li>
          <li><strong>Component Composition:</strong> Parent-child relationships</li>
        </ul>
      </section> */}
    </div>
  )
}

/*
KEY REACT PRINCIPLES:

1. COMPONENT-BASED ARCHITECTURE
   - Break UI into reusable components
   - Each component has its own state and props

2. UNIDIRECTIONAL DATA FLOW
   - Data flows down from parent to child via props
   - Events flow up from child to parent via callbacks

3. VIRTUAL DOM
   - React creates a virtual representation of the DOM
   - Only updates what actually changed for performance

4. DECLARATIVE PROGRAMMING
   - Describe what the UI should look like for any state
   - React handles the how of updating the DOM

5. HOOKS RULES
   - Only call hooks at the top level of components
   - Don't call hooks inside loops, conditions, or nested functions

6. STATE IMMUTABILITY
   - Never mutate state directly
   - Always create new objects/arrays when updating state
*/