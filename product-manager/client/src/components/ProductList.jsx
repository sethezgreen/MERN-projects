import React, { useState , useEffect } from 'react'
import axios from 'axios'

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
                    return <p key={product._id}>{product.title}</p>
                })
            }
        </div>
    )
}

export default ProductList