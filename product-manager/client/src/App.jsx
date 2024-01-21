import './App.css'
import { Routes, Route} from 'react-router-dom'
import Main from './views/Main'
import ViewOne from './components/ViewOne'

function App() {

  return (
    <div className="app">
        <Routes>
          <Route element={<Main/>} path="/" default/>
          <Route element={<ViewOne/>} path='/product/:id'/>
        </Routes>
    </div>
  )
}

export default App
