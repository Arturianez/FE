function Button(props) {
    const {
        color,
        onHandleClick,
        size,
        text
    } = props
    console.log(props);

    return (
        <div>
            <button 
                className={`primary__btn ${size}`}
                style={{background: color, color:"white"}}
                onClick={onHandleClick}
                    >{text}
            </button>
        </div>
        
    )
}

export default Button