import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter</h1>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          -
        </button>
      </div>
      <div className="card">
        <p>{count}</p>
      </div>
    </>
  )
}

export default App
