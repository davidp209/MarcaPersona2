export function getAlumnos() {
    return fetch(`http://marcapersonalfp.test/api/v1/users`)
    .then(res => res.json())
    .then(data => {console.log(data)
    return data;})
}