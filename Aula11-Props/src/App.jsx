import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/* 
import Saudacao from "./components/Saudacao";
import Card from './components/Card';
import Contador from './components/Contador';

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

      <Contador></Contador>
    </>
  )
}

export default App */


import Post from "./components/Post";

export default function App() {
  // 🔹 Array de posts que o PAI guarda
  const posts = [
    {
      id: 1,
      title: "Primeiro Post",
      autor: "Gustavo",
      conteudo: "Aprendendo React com props e state.",
    },
    {
      id: 2,
      title: "Segundo Post",
      autor: "Julia",
      conteudo: "Cada post tem seu próprio contador de curtidas!",
    },
    {
      id: 3,
      title: "Terceiro Post",
      autor: "Juliano",
      conteudo: "Fluxo unidirecional deixa o código mais previsível.",
    },
  ];

  return (
    <main style={{ padding: 20 }}>
      <h1>TDE 11 — Lista de Posts</h1>

      {/* 🔹 O pai envia dados para cada filho via props */}
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          autor={post.autor}
          conteudo={post.conteudo}
        />
      ))}
    </main>
  );
}
