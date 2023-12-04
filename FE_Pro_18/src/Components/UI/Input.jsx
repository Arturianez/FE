function Input({value, placeHolder,onHandleChange}) {
    return (
        <div className="input_block">
            <input value={value} placeholder={placeHolder} onChange={onHandleChange} />
        </div>
    )
}
export default Input