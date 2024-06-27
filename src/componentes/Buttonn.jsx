import { useState } from "react"


function Buttonn(props){

   // const arrayDeValores = useState("valor inicial")
   // const miEstado = arrayDeValores[0]
   // const setMiEstado = arrayDeValores[1]
    const [miEstado , setMiEstado] = useState("valor inicial")

    //useEffect(function,array de dependencia)
    /* 
    useEffect(() => {
        console.log("pedido a la api de ML, me traigo 1000 productos")
    },[]) 
    */

    const hacerClick = () => {
        console.log("click")
        setMiEstado("nuevo valor")
    }

    return (
        <button className="btn text-bg-secondary " onClick={hacerClick}>{miEstado}</button>
    )
}

export default Buttonn