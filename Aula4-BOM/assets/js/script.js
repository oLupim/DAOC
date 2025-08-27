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


import { Header } from "../../components/Header";
//import { ListCards }  from "../../components/ListCards";
import { Footer }  from "../../components/Footer";

document.body.appendChild(Header())
//document.body.appendChild(ListCards())
document.body.appendChild(Footer())

