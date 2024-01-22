import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateForm = (props) => {
    const navigate = useNavigate()
    const {id} = useParams()

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()

        const newProduct = {title, price, description}
        axios.patch(`http://localhost:8000/api/edit/${id}`, newProduct)
            .then((res) => {
                console.log(res)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Update {title}</h1>
            <form onSubmit={submitHandler}>
                <p>
                    <label>Title:</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    <label>Price:</label>
                    <input type="text" onChange={(e) => setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                    <label>Description:</label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>
                </p>
                <input type="submit" value="update" />
            </form>
        </div>
    )
}

export default UpdateForm