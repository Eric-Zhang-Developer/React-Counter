import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter</h1>
      <div className='counter-container'>
        <div className="card">
          <button className="additionButton" onClick={() => setCount((count) => count + 1)}>
            +
          </button>
        </div>
        <div className="card">
          <button className='subtractionButton' onClick={() => setCount((count) => count - 1)}>
            -
          </button>
        </div>
      </div>
      <div className="card">
        <p className='count'>{count}</p>
      </div>
    </>
  )
}

export default App
