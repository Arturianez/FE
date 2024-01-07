import { useEffect, useState } from "react"

function Comments() {
const [comments, setComments] = useState(null)

useEffect(() => {
    async function fetchComments() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments`)
            const commentsData = await response.json()
            setComments(commentsData)
        } catch (e) {
            console.error(e.message, "Request for comment failed");
        }
    }
    fetchComments()
}, []);
    return (
        <div className="container_comments">
            <div className="comment">
                {comments && comments.map((item) => 
                <div>
                    <strong>{item.email}</strong>
                    <h2>{item.name}</h2>
                    <p>{item.body}</p>
                </div>
                )}
            </div>
        </div>
    )
}
export default Comments