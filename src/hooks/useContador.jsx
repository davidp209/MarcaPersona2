import { useState , useEffect} from 'react';
import { getContador } from '../servicios/getContador';


const useContador = () => {

    const [buscado, setBuscado] = useState(false);

      // Estado con la lista de post que recuperamos de la REST API
      const [contadores, setContadores] = useState({
        numEmpresas: 0,
        numProyectos: 0,
        numAlumnos: 0,
      });
    
    
      function obtenerContador(){
    
          setBuscado(true);
          getContador({tabla: "empresas"}).then(valor => {
              
              setContadores(contadores => ({
                ...contadores,
                numEmpresas: valor.count,//si no le pongo el .count me devuelve un objeto con el valor de count
              }));
            });   
            
            getContador({tabla: "proyectos"}).then(valor => {
              
              setContadores(contadores => ({
                ...contadores,
                numProyectos: valor.count,
              }));
            });
    
            getContador({tabla: "users"}).then(valor => {
              
              setContadores(contadores => ({
                ...contadores,
                numAlumnos: valor.count,
              }));
              console.log(valor);
              setBuscado(false);
            });
      }
    
      
      useEffect(obtenerContador, []);//se ejecuta al cargar la página, se ejecuta solo una vez al cargar la página   



      return {contadores, buscado};


}
export default useContador;