import { Link, useNavigate } from 'react-router-dom'

const DisplayAll = (props) => {
    const {removeFromDom, authorList} = props
    const navigate = useNavigate()

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
                                <td><button onClick={(e) => {editButtonHandler(author._id)}}>edit</button> | delete <Link to={`/edit/${author._id}`}>edit</Link></td>
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