import { useState } from 'react'
import './App.css'
import CustomButtom from './Components/UI/CustomButtom'
import Modal from './Components/Modal'

function App() {
const [isClicked, setIsClicked] = useState(false)

  return (
    <>
      <CustomButtom
      text="Create a comment"
      onHandleClick={() => setIsClicked(!isClicked)}
      />
      {isClicked && <Modal onClose={setIsClicked}/>}
    </>
  )
}

export default App

// Есть кнопка: написать комментарий. 
// По нажатию на эту кнопку открывается модальное окно с 3 инпутами: 
// Заголовок, описание, автор. Далее в модалке есть кнопка создать. 
// По клику на эту кнопку вы создаете коммент.
// ПОдробнее: вы создаете массив объектов, например, 
// по дефолту у вас их 2 ( каждый комментарий - это объект из заголовка описания и автора)
// далее мапите этот массив объектов и выводите на страницу в структуре
