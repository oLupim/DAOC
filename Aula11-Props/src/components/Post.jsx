import { useState } from "react";

export default function Post({ title, autor, conteudo}) {
    const [likes, setLikes] = useState(0);

    function contarLike() {
        setLikes(likes+1)
    }

    return (
        <div>
            <h2>{title}</h2>
            <p><strong>Autor: </strong>{autor}</p>
            <p>{conteudo}</p>

            <button onClick={contarLike} >
                Curtir
            </button>
            <span style={ {padding: "10px"} }>
                {likes} {likes === 1 ? "curtida" : "curtidas"}
            </span>
        </div>
    )
}