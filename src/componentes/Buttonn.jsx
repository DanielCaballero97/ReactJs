import { useState } from "react"


function Buttonn(props){

   // const arrayDeValores = useState("valor inicial")
   // const miEstado = arrayDeValores[0]
   // const setMiEstado = arrayDeValores[1]
    const [miEstado , setMiEstado] = useState("valor inicial")

    const hacerClick = () => {
        console.log("click")
        setMiEstado("nuevo valor")
    }

    return (
        <button className="btn" onClick={hacerClick}>{miEstado}</button>
    )
}

export default Buttonn