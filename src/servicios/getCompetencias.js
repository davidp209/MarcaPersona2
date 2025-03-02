export function getCompetencias() {
    return fetch(`http://marcapersonalfp.test/api/v1/competencias`)
    .then(res => res.json())
    .then(data => {console.log(data)
    return data;})
}