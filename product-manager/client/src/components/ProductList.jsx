import React, { useState , useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProductList = (props) => {
    const {products, setProducts} = props

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

    return (
        <div>
            {
                products.map((product) => {
                    return (
                        <div key={product._id} className='productListing'>
                            <Link to={`/product/${product._id}`}>{product.title}</Link> <br />
                            <Link to={`/product/edit/${product._id}`}>edit</Link>
                        </div>
                    ) 
                })
            }
        </div>
    )
}

export default ProductList