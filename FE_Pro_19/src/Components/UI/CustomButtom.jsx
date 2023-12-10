function CustomButtom({text,size, onHandleClick}) {
    return (
       <div className={`btn ${size}`} onClick={onHandleClick}>{text}</div>
    )
}
export default CustomButtom