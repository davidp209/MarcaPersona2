import { useEffect, useState } from "react";
import { getCompetencias } from "../servicios/getCompetencias";

const useCompetencias = () => {

    const [buscando, setBuscando] = useState(false);

    const [competencias, setCompetencias] = useState([]);

    function obtenerCompetencias() {
  
      setBuscando(true);
  
  
      getCompetencias().then(valor => {
  
        setBuscando(false);
        setCompetencias(valor);
        console.log(valor);
  
      });
  
    }

    useEffect(obtenerCompetencias, []);

    return { buscando, competencias };

}
export default useCompetencias;