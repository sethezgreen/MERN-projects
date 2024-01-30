import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AuthorForm from './components/AuthorForm'
import DisplayAll from './components/DisplayAll'

function App() {
  const [authorList, setAuthorList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:8000/api/authors')
      .then((res) => {
        setAuthorList(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const createAuthor = authorObject => {
    axios.post('http://localhost:8000/api/createAuthor', authorObject)
      .then((res) => {
        console.log(res.data)
        setAuthorList([...authorList, res.data])
        navigate('/')
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <Routes>
        <Route element={<DisplayAll authorList={authorList}/>} path='/'/>
        <Route element={<AuthorForm onSubmitProp={createAuthor}/>} path='/new'/>
      </Routes>
    </div>
  )
}

export default App
