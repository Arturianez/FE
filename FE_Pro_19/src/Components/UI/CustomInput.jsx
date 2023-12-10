function CustomInput({ placeHolder, value, onHandleChange }) {
  return (
    <div className="input_container">
      <input type={value} placeholder={placeHolder} onChange={onHandleChange} />
    </div>
  );
}
export default CustomInput;
