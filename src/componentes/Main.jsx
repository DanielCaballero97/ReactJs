import ItemListContainer from "./ItemListContainer"
import Buttonn from "./Buttonn"
import ProductosContainer from "./ProductosContainer"

function Main () {
    return(
        <main className="p-5 g-5">
            <ItemListContainer greeting="holi"/>

            <h3>Inventario</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere natus esse numquam nihil dignissimos eligendi, vel saepe pariatur aut voluptatum, ut excepturi eius doloremque exercitationem dolores cumque? Odit, saepe tempore?</p>
            <Buttonn texto="holi"></Buttonn>


            <ProductosContainer/>

        </main>

    )
}

export default Main