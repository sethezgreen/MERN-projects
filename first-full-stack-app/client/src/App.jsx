import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonForm from './components/PersonForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <PersonForm />
    </div>
  )
}

export default App
