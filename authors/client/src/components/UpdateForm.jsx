import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import AuthorForm from './AuthorForm'

const UpdateForm = (props) => {
    const {id} = useParams()
    const [author, setAuthor] = useState({})
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then((res) => {
                setAuthor(res.data)
                setLoaded(true)
            })
            .catch((err) => console.log(err))
    }, [])

    const updateAuthor = authorObject => {
        axios.put(`http://localhost:8000/api/updateAuthor/${id}`, authorObject)
            .then((res) => {
                console.log(res)
                navigate('/')
                // need display list to update after put request
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            {
                loaded && <AuthorForm onSubmitProp={updateAuthor} initialName={author.name} submitText={'Update'}/>
            }
        </div>
    )
}

export default UpdateForm