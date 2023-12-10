import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import CustomButton from "./Components/UI/CustomButton";

function App() {
  const [isClicked, setIsClicked] = useState(false);


  const onHandleOpen = () => {
    setIsClicked(!isClicked)
  }

  const handleClose = () => {
    setIsClicked(!isClicked)
  }

  return (
    <>
      <CustomButton
        text="Open form"
        onHandleClick={onHandleOpen}
      />
      {isClicked && <Form onHandleClose={handleClose} />}
    </>
  );
}

export default App;

// Создаем custom btn, input
// Создаем компонент form, в нем рендерим форму.
// Практикуем условный рендеринг. Создаем состояние useState в компоненте App,
// по клику на кастомную кнопку отображаем саму форму с инпутами.
// В форме с инпутами у нас должно быть 2 инпута и кнопка.
// По клику на кнопку - отправляем данные в консоль
