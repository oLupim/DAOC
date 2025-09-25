export default function Card({ children }){
    return(
        <div style={
            {
                width: "140px",
                height: "200px",
                border: "1px solid",
                margin: "8px", // espaço entre os cards
                display: "inline-block",
                alignItems: "center",
                justifyContent: "center"
            }
        }>
            {children}

        </div>
    )
}