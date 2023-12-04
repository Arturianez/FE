import { useState } from "react";
import CustomButton from "./UI/CustomButton";
import Input from "./UI/Input";
import App from "../App";

function Form() {
  const [firstWord, setFirstWord] = useState("");
  const [secondWord, setSecondWord] = useState("");
  const [closeForm, setCloseForm] = useState(false);

  function FinalResult() {
    console.log("Access granted. Your object: ", {
      firstWord: firstWord,
      secondWord: secondWord,
    });
  }
  
  const handleClose = () => {
    setCloseForm(true);
  };
  if (closeForm) {
    return null;
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
            onHandleClick={() => {handleClose()}}
            />
        </div>
      </div>
    </>
  );
}
export default Form;
