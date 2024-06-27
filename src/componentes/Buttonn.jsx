import { useState } from "react"
import { useDesktop } from "../utils"





function Buttonn({ children }){

    const [estado , setEstado] = useState(false)

    const isDesktop = useDesktop()

    const hacerClick = () => {
        setEstado(!estado)
    }







    if (estado === false) {
        return (
            <div>
                <button onClick={hacerClick} className="btn bg-white border-rounded">{children}</button>
            </div>
    )
  }


  if (isDesktop) {
    return (
    <div>
        <button onClick={hacerClick} className="btn bg-white border-rounded">{children}</button>
        <div className="">
            soy un popup
        </div>
    </div>
    )
}

return (
    <div> 
        <button onClick={hacerClick} className="btn bg-white border-rounded">{children}</button>
        <div className="">
            soy un popup
         </div>
  </div>
)

  }


export default Buttonn