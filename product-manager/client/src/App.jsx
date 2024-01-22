import './App.css'
import { Routes, Route} from 'react-router-dom'
import Main from './views/Main'
import ViewOne from './components/ViewOne'
import UpdateForm from './components/UpdateForm'

function App() {

  return (
    <div className="app">
        <Routes>
          <Route element={<Main/>} path="/" default/>
          <Route element={<ViewOne/>} path='/product/:id'/>
          <Route element={<UpdateForm/>} path='/product/edit/:id'/>
        </Routes>
    </div>
  )
}

export default App
