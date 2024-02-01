import { Link, useNavigate } from 'react-router-dom'
import DeleteButton from './DeleteButton'
import { useState, useEffect } from 'react'
import axios from 'axios'

const DisplayAll = (props) => {
    const {removeFromDom, authorList, setAuthorList} = props
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then((res) => {
            setAuthorList(res.data)
            // console.log(res.data)
        })
            .catch((err) => console.log(err))
        }, [])

    const editButtonHandler = (id) => {
        navigate(`/edit/${id}`)
    }

    return (
        <div>
            <Link to={`/new`}>Add an author</Link>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                {
                    authorList.map((author) => {
                        return (
                            <tr key={author._id}>
                                <td>{author.name}</td>
                                <td><button onClick={(e) => {editButtonHandler(author._id)}}>edit</button> | <DeleteButton authorId={author._id} successCallback={() => removeFromDom(author._id)}/></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default DisplayAll