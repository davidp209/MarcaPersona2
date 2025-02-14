export function getContador({tabla}) {
    return fetch(`http://marcapersonalfp.test/api/v1/${tabla}/count`)    //poner contracoma para que funcione
    .then(res => res.json())
    .then(data => {console.log(data)
    return data;})
}