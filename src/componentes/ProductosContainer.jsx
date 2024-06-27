import { useDeferredValue, useEffect } from "react"
import Productos from "./Productos"
import { useState } from "react"



function ProductosContainer(){


    useEffect(() => {

        const [estado, setEstado] = useState()

        fetch("/productos.json")
        .then((res) =>  {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            setEstado(data)
        })
    },[])


    return(
        <Productos></Productos>
    )
}

export default ProductosContainer