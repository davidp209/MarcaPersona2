export function getFamiliaProfesional() {
    return fetch(`http://marcapersonalfp.test/api/v1/familias_profesionales`)    
    .then(res => res.json())
    .then(data => {console.log(data)
    return data;})
}