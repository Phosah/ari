import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Illustrations from './components/Illustrations'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-black text-white max-w-7xl mx-auto">
      <Illustrations />
      <Navbar />
      <h1>Ari</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
