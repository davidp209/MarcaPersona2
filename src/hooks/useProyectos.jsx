import { useEffect, useState } from "react";
import { getProyectos } from "../servicios/getProyectos";

const useProyectos = () => {
    const [buscando, setBuscando] = useState(false);
    const [proyectos, setProyectos] = useState([]);

    function obtenerProyectos(){
        
        //Marcamos que estamos buscando los datos
        setBuscando(true);
    
        // Usamos el servicio de obtención de posts que hemos creado
        getProyectos().then(proyecto => {
    
          //Cargamos los post en el estado del componente
          setProyectos(proyecto);
    
          //Indicamos que hemos terminado de cargar los datos
          setBuscando(false);
    
        });                    
      }                 
      // Llamamos a la función de extracción de datos con un useEffect
      // para que solo se ejecute una vez
      useEffect(obtenerProyectos, []);

    return { buscando, proyectos}
}
export default useProyectos;