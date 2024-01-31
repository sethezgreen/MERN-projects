import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'

const AuthorForm = (props) => {
    const { initialName, onSubmitProp, submitText } = props
    const [name, setName] = useState(initialName)
    const navigate = useNavigate()
    
    const onSubmitHandler = (e) => {
        e.preventDefault()
        onSubmitProp({name})
    }

    const cancelButtonOnClick = (e) => {
        navigate('/')
    }

    return (
        <div>
            <Link to={`/`}>Home</Link>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name:</label> <br />
                    <input type="text" name="name" value={name || ""} onChange={(e) => {
                        setName(e.target.value)
                    }}/>
                </p>
                <button onClick={cancelButtonOnClick} type="button">Cancel</button> 
                <button type="submit">{submitText || "Submit"}</button>
            </form>
        </div>
    )
}

export default AuthorForm