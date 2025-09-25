import { useState } from "react"


export default function Contador(){
    // let numero = 0
    const [numero, setNumero] = useState(0)

    function incrementar(){
        setNumero(numero + 1)
        console.log(numero)
    }

    
    return (
        <div>
        <h2>Contador</h2>
        <p>{numero}</p>

        <div>
            <button onClick={() => setNumero(numero - 1)}>-</button>
            <button onClick={() => setNumero(0)}>Reset</button>
            <button onClick={() => setNumero(numero + 1)}>+</button>
        </div>
        </div>
    );
}