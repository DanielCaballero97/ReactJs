

function Productos({productos}){
    return(
        <section className="gridProductos">

            {
                productos.map((producto,i)=> {
                    return  (

                        <article key={i} className="cardProducto">
                            <h2>{producto.nombre}</h2>
                            <p>${producto.precio}</p>
                            <h4>{producto.daño}</h4>
                        </article>

                    )
                })
            }

        </section>
    )
}

export default Productos