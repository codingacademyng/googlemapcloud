import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='box'>
      <div className='title'>
        <h2>MAP Cloud</h2>
      </div>
      <div className="map">

      </div>
     </div>
    </>
  )
}

export default App
