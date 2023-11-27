import CustomButton from "./UI/CustomButton";
import CustomInput from "./UI/CustomInput";
import { useState } from "react";
import "../App.css"

function UserForm () {
    const [username,setUsername] = useState("") // второй элемент содержит значение первого, и второй можно вызывать
    const [password, setPassword] = useState("")

    
    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleUsernameButtonClick = () => { // нажатие кнопки и занесени данных в console
        console.log("Username:", username)
    }

    const handlePasswordButtonClick = () => { // нажатие кнопки и занесени данных в console
        console.log("Password:", password)
    }
    const thirdButtom = () => {
        const finalPhrase = {username, password};
        console.log(finalPhrase);
    }

    return (
        <>
        <CustomInput
        placeholder="Username"
        value={username}
        onHandleChange={handleUsernameChange}
        />
        <CustomButton
        text='Send a username'
        onHandleClick={handleUsernameButtonClick}
        />
        <CustomInput
        value={password}
        placeholder="Password"
        onHandleChange={handlePasswordChange}
        />
        <CustomButton
        text='Send a password'
        onHandleClick={handlePasswordButtonClick}
        />
        <CustomButton
        text='Username + password'
        onHandleClick={thirdButtom}
        />
        </>
    )
}
export default UserForm
