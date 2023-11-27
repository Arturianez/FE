import { useState } from "react"
import CustomButton from "./CustomButton"

function CustomInput(props) {
    const {
        value,
        onHandleChange,
        placeholder,
    } = props
    return (
        <div>
            <input
                value={value}
                onChange={onHandleChange}
                placeholder={placeholder}
            />
        </div>
    )
}
export default CustomInput