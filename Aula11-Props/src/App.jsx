import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saudacao from "./components/Saudacao";
import Card from './components/Card';

function App() {
  const pessoa = {
    nome: "Gustavo",
    idade: 22
  }
  return (
    <>
      <h1>Aula 11</h1>
      <Saudacao nome="Juliano" idade="38" />
      <Saudacao nome="Julia" idade="28" />
      <Saudacao {...pessoa} />

      <Card>
        <h2>Título</h2>
        <p>Desc</p>
      </Card>

      <Card>
        <h2>Título</h2>
        <p>Desc</p>
      </Card>

      <Card>
        <h2>Título</h2>
        <p>Desc</p>
      </Card>
    </>
  )
}

export default App
