import Buttonn from "./Buttonn"

function Productos({productos}){
    return(
        <section className="gridProductos row g-4">

            {
                productos.map((producto,i)=> {
                    return  (

                        <article key={i} className="cardProducto col-3 p-6 g-4">
                            <h2>{producto.nombre}</h2>
                            <p className="precioProducto">${producto.precio} monedas de oro</p>
                            <h4>daño total: {producto.daño}</h4>
                            <img src={producto.imagen} alt={producto.nombre}></img>
                            <Buttonn>ver mas</Buttonn>

                        </article>

                    )
                })
            }

        </section>
    )
}

export default Productos