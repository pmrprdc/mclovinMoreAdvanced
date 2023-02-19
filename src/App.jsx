import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import styled from "styled-components"


const NiceButton = styled.button`
width: 200px;
height: 50px;
background-color: green;
color: white;

`


function App() {
  const [count, setCount] = useState(0)

  return (

        <NiceButton>Click me now</NiceButton>
       
  )
}

export default App
