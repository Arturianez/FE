function PostItem({title,description,author}) {
    return (
        <div>
            <div className="postData">
                <h5>{title}</h5>
                <p>{description}</p>
                <strong>{author}</strong>
            </div>
        </div>
    )
}
export default PostItem