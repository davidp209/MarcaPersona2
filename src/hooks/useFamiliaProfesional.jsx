import { getFamiliaProfesional } from "../servicios/getFamiliaProfesional";
import { useEffect, useState } from "react";

const useFamiliaProfesional = () => {
    const [buscando, setBuscando] = useState(false);
    const [listaFamiliaProfesional, setListaFamiliaProfesional] = useState([]);

    function obtenerFamilias(){
        
        //Marcamos que estamos buscando los datos
        setBuscando(true);
    
        // Usamos el servicio de obtención de posts que hemos creado
        getFamiliaProfesional().then(familias => {
    
          //Cargamos los post en el estado del componente
          setListaFamiliaProfesional(familias);
    
          //Indicamos que hemos terminado de cargar los datos
          setBuscando(false);
    
        });                    
      }                 
      // Llamamos a la función de extracción de datos con un useEffect
      // para que solo se ejecute una vez
      useEffect(obtenerFamilias, []);

    return { buscando, listaFamiliaProfesional}
}
export default useFamiliaProfesional;