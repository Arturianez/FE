import CustomButtom from "./UI/CustomButtom"
import CustomInput from "./UI/CustomInput"
import "../App.css"
import { useState } from "react";

function Modal({onHandleClose}) {
const [firstWord, setFirstWord] = useState("");
const [secondWord, setSecondWord] = useState("");
const [author, setAuthor] = useState("")

function onHandleCreateComment() {
    console.log("My comment: ", {firstWord: firstWord, secondWord: secondWord, author: author});
}
    return (
        <div className="modal">
            <div className="modal_container">
                <CustomInput
                value={firstWord}
                placeHolder="Title"
                onHandleChange={(e) => setFirstWord(e.target.value)}
                />
                <CustomInput
                value={secondWord}
                placeHolder="Description"
                onHandleChange={(e) => setSecondWord(e.target.value)}
                />
                <CustomInput
                value={author}
                placeHolder="Author"
                onHandleChange={(e) => setAuthor(e.target.value)}
                />
                <CustomButtom
                text="Create"
                size="btn_modal"
                onHandleClick={onHandleCreateComment}
                />
                <CustomButtom
                text="Close modal"
                size="btn_modal"
                onHandleClick={onHandleClose}
                />
            </div>
        </div>
    )
}
export default Modal