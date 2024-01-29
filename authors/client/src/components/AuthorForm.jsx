import React, { useState } from "react";

const AuthorForm = (props) => {
    const { initialName, onSubmitProp } = props
    const [name, setName] = useState(initialName)
    
    const onSubmitHandler = (e) => {
        e.preventDefault()
        onSubmitProp({name})
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name:</label> <br />
                <input type="text" name="name" value={name} onChange={(e) => {
                    setName(e.target.value)
                }}/>
            </p>
            <button>Cancel</button> 
            {/* make button component */}
            <button type="submit">Submit</button>
        </form>
    )
}

export default AuthorForm