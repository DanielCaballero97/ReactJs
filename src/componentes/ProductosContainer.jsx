import { useDeferredValue, useEffect } from "react"
import Productos from "./Productos"
import { useState } from "react"



function ProductosContainer(){

    const [productos, setProductos] = useState([])
    const [pagina, setPagina] = useState(1)

    useEffect(() => {

        fetch("/productos.json")
        .then((res) =>  {
            return res.json()
        })
        .then((data) => {
            setProductos(data)
        })

    },[])

    const cambiarPaginaUno = () => {
        setPagina(1)
      }
    const cambiarPaginaDos = () => {
        setPagina(2)
      }
    const cambiarPaginaTres = () => {
        setPagina(3)
      }


    return(
        <div>
            <Productos productos={productos}/>
            <button onClick={cambiarPaginaUno}>Pagina 1</button>
            <button onClick={cambiarPaginaDos}>Pagina 2</button>
            <button onClick={cambiarPaginaTres}>Pagina 3</button>
     </div>
    )
}

export default ProductosContainer