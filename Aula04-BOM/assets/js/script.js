/* let frutas = ["Morango", "Maça"]

frutas.pop()

frutas.push("Melancia")
frutas.unshift("Banana")

console.log(frutas)
console.log(frutas.join("-"))



console.log("For Tradicional")
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

console.log("For Of")
for (let fruta of frutas){
    console.log(frutas)
}

console.log("For each")
const listar = (item, index) => {
    console.log((index + 1 )) + " - " + item
}

frutas.forEach(listar)

console.log("Array")
let numeros =[2,2,2,2]
const array = numeros.map()

const cidades = [
    {nome: "Torres", estado: "RS"},
    {nome: "Capão", estado: "RS"},
    {nome: "PKCITY", estado: "SC"}
]

const cidadeRS = cidades.filter(cidade => cidade.estado == "RS")
console.log(cidadeRS) */


import products from './data.js';

import { Header } from '../../components/Header.js';
import { ListCards } from '../../components/ListCards.js';
import { Footer } from '../../components/Footer.js';

// Função principal que renderiza a aplicação
const renderApp = () => {
    // Seleciona os elementos do DOM onde os componentes serão inseridos
    const headerElement = document.getElementById('main-header');
    const contentElement = document.getElementById('app-content');
    const footerElement = document.getElementById('main-footer');

    // Renderiza cada componente e insere o HTML gerado no DOM
    headerElement.innerHTML = Header('Minha Loja Online');
    contentElement.innerHTML = ListCards(products);
    footerElement.innerHTML = Footer(products);
};

// Adiciona um listener para garantir que o DOM esteja totalmente carregado antes de renderizar
document.addEventListener('DOMContentLoaded', renderApp);