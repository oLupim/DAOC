import { useState } from "react"


export default function Contador(){
    // let numero = 0
    const [numero, setNumero] = useState(0)

    function incrementar(){
        setNumero(numero + 1)
        console.log(numero)
    }

    
    return(
        <div>
            <p>Contador: {numero}</p>
            <button onClick={incrementar}>Incrementar</button>
            <h2>{tempo}</h2>
        </div>
    )
}