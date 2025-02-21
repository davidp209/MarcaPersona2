import Cabecera from "../../componentes/Cabecera/Cabecera"; 
import Cuerpo from "../../componentes/Cuerpo/Cuerpo";
import Footer from "../../componentes/Footer/Footer";
import {useState} from 'react';
const Home = (props) => {

    const [idioma, setIdioma] = useState(props.idioma);

    function manejarSeleccion(idiomaSeleccionado){
        setIdioma(idiomaSeleccionado);
        mandarSeleccion(idiomaSeleccionado);
    }
    function mandarSeleccion(idiomaSeleccionado){
        props.manejarSeleccion(idiomaSeleccionado);
    }



return(
    <>
       <Cabecera manejarSeleccion={manejarSeleccion}></Cabecera>
       <Cuerpo></Cuerpo>
        <Footer></Footer>
    
    </>


);



}
export default Home;