import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  

  return (
    <>
      <Button
      text="Push on button"
      color="navy"
      size="sizesBtn"
      onHandleClick={ () => console.log("Кнопка нажата")}
      />
    </>
  )
}

export default App
