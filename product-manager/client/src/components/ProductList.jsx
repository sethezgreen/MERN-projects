import React, { useState , useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const ProductList = (props) => {
    const {removeFromDom, products, setProducts} = props
    const {id} = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/delete/${id}`)
            .then(() => {
                removeFromDom(id)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            {
                products.map((product) => {
                    return (
                        <div key={product._id} className='productListing'>
                            <Link to={`/product/${product._id}`}>{product.title}</Link> <br />
                            <Link to={`/product/edit/${product._id}`}>edit</Link>
                            <button onClick={(e) => {deleteHandler(product._id)}}>delete</button>
                        </div>
                    ) 
                })
            }
        </div>
    )
}

export default ProductList