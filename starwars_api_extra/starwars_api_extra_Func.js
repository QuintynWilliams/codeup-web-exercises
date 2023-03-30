
export const getPlanet = async (planet) => {
    let response = await fetch(`https://swapi.dev/api/planets/`);
    let data = await response.json();
    let match = data.results.find(n => {
        return n.name === `${planet}`
    })
    return match;
}

export const getEyes = async (name) => {
    let response = await fetch(`https://swapi.dev/api/people/`);
    let data = await response.json();
    let match = data.results.find(n => {
        return n.name === `${name}`
    })
    return match.eye_color;
}

export const getMovie = async (movie) => {
    let response = await fetch(`https://swapi.dev/api/films/`);
    let data = await response.json();
    let match = data.results.find(n => {
        return n.title === `${movie}`
    })
    return match
}

export const renderHtml = (val) => {

}
