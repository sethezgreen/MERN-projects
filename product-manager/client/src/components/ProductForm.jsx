import React, { useState } from 'react'
import axios from 'axios'

const ProductForm = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const {products, setProducts} = props

    const onSubmitHandler = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/createProduct', {
            title,
            price,
            description
        })
            .then((res) => {
                console.log(res)
                setProducts([...products, res.data])
            })
            .catch((err) => {
                console.log(err)
            })

            setTitle("")
            setPrice("")
            setDescription("")
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title: </label>
                <input type="text" onChange = {(e) => setTitle(e.target.value)} value={title || ""}/>
            </p>
            <p>
                <label>Price: </label>
                <input type="num" onChange = {(e) => setPrice(e.target.value)} value={price || ""}/>
            </p>
            <p>
                <label>Description: </label>
                <input type="text" onChange = {(e) => setDescription(e.target.value)} value={description || ""}/>
            </p>
            <input type="submit" value="create" />
        </form>
    )
}

export default ProductForm