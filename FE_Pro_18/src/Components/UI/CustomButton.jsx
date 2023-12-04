function CustomButton({text,onHandleClick}) {
    return (
        <button className={`btn`} onClick={onHandleClick}>{text}</button>
    )
}
export default CustomButton