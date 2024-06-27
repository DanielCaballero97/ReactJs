import { useDeferredValue, useEffect } from "react"
import Productos from "./Productos"
import { useState } from "react"



function ProductosContainer(){

    const [productos, setProductos] = useState([])
    const [mostrar, setMostrar] = useState(true)

    useEffect(() => {

        fetch("/productos.json")
        .then((res) =>  {
            return res.json()
        })
        .then((data) => {
            setProductos(data)
        })

    },[])


    const mostrarProductos = () => {
        setMostrar(!mostrar)
      }



      if (mostrar) {
        return (
          <div>
            <button onClick={mostrarProductos}>mostrar productos</button>
            <Productos productos={productos} />
          </div>
        )
      } else {
        return (
          <div>
            <button onClick={mostrarProductos}>mostrar productos</button>
          </div>
        )
      }
}

export default ProductosContainer