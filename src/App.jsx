import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import './fonts/Larken-Bold.ttf'

function App() {

  return (
    <div className="app min-h-screen bg-black text-white">
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

export default App

