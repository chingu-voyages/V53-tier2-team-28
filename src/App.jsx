import { useState } from 'react'
import './App.css'
import Cal from './components/Cal.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Cal />
        <Footer />
      </div>
    </>
  )
}

export default App
