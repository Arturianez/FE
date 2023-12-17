function CustomButtom({text,size,onHandleClick}) {
    return (
       <button className={`btn ${size}`} onClick={onHandleClick}>{text}</button>
    )
}
export default CustomButtom