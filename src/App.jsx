import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Illustrations from './components/Illustrations'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="app min-h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="illustrations" element={<Illustrations />} />
      </Routes>
    </div>
  )
}

export default App

