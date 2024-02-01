import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AuthorForm from './components/AuthorForm'
import DisplayAll from './components/DisplayAll'
import UpdateForm from './components/UpdateForm'

function App() {
  const [authorList, setAuthorList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:8000/api/authors')
      .then((res) => {
        setAuthorList(res.data)
        // console.log(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const removeFromDom = (authorId) => {
      setAuthorList(authorList.filter(author => author._id !== authorId))
  }

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
      <h1>Favorite Authors</h1>
      <Routes>
        <Route element={<DisplayAll authorList={authorList} removeFromDom={removeFromDom}/>} path='/'/>
        <Route element={<AuthorForm onSubmitProp={createAuthor}/>} path='/new'/>
        <Route element={<UpdateForm />} path='/edit/:id'/>
      </Routes>
    </div>
  )
}

export default App
