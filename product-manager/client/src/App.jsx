import './App.css'
import { Routes, Route} from 'react-router-dom'
import Main from './views/Main'

function App() {

  return (
    <div className="app">
        <Routes>
          <Route element={<Main/>} path="/" default/>
        </Routes>
    </div>
  )
}

export default App
