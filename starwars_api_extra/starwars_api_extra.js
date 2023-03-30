import {getPlanet, getEyes, getMovie} from "./starwars_api_extra_Func.js"

(async () => {
    let planet = await getPlanet('Yavin IV');
    let characterEye = await getEyes('Luke Skywalker');
    let movieData = await getMovie('The Empire Strikes Back');
    console.log(planet)
    console.log(characterEye)
    console.log(movieData)
}) ();
