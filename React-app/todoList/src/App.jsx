import { useState } from 'react'
import './App.css'

export default function App() {
  function ChangeColor(){
    document.body.style.backgroundColor = "brown"
  }
  return(
    <button onClick={ChangeColor}>Click me</button>
  )
}