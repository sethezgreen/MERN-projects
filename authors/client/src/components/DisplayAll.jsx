import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const DisplayAll = (props) => {
    const {removeFromDom, authorList} = props

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={`/new`}>Add an author</Link>
            {
                authorList.map((author) => {
                    return (
                        <div key={author._id}>
                            <p>{author.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayAll