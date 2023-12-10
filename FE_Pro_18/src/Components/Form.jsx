import { useState } from "react";
import CustomButton from "./UI/CustomButton";
import Input from "./UI/Input";
import App from "../App";

function Form({onHandleClose}) {
  const [firstWord, setFirstWord] = useState("");
  const [secondWord, setSecondWord] = useState("");

  function FinalResult() {
    console.log("Access granted. Your object: ", {
      firstWord: firstWord,
      secondWord: secondWord,
    });
  }


  return (
    <>
      <div className="Form">
        <div className="form_block">
          <h2>Special access</h2>
          <Input
            value={firstWord}
            placeHolder="first part of password"
            onHandleChange={(e) => setFirstWord(e.target.value)}
          />
          <Input
            value={secondWord}
            placeHolder="second part of password"
            onHandleChange={(e) => setSecondWord(e.target.value)}
          />
          <CustomButton text="Push the button" onHandleClick={FinalResult} />
          <CustomButton
            text="Close the form"
            onHandleClick={onHandleClose}
            />
        </div>
      </div>
    </>
  );
}
export default Form;
