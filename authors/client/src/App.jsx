import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import AuthorForm from './components/AuthorForm'

function App() {


  return (
    <div>
      <Routes>
        <Route element={<DisplayAll />} path='/authors'/>
        <Route element={<AuthorForm />} path='/new'/>
      </Routes>
    </div>
  )
}

export default App
