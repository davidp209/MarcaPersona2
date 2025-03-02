export function getProyectos() {
    return fetch(`http://marcapersonalfp.test/api/v1/proyectos`)    
    .then(res => res.json())
    .then(data => {console.log(data)
    return data;})
}