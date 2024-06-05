
import Header from "./componentes/Header"
import Main from "./componentes/Main"
import Footer from "./componentes/Footer"

/*
App es un componente
Componentes : 
- Son funciones
- Van en mayusculas (por el compilador)
- si o si tienen que tener retorno
- Solo pueden retornar UN solo elemento
Tipos de Componentes : 
- Estructurales : Son los que representan una plantilla general o un bloque generico del sitio/aplicacion
*/
  function App() {
    return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
    )
  }



export default App
