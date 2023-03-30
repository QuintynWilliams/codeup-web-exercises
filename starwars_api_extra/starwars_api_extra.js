import {getPlanet, getEyes, getMovie} from "./starwars_api_extra_Func.js"
import {renderGithubUser} from "../js/promises-github";

(async () => {
    let planet = await getPlanet('Yavin IV');
    console.log(planet)
    let characterEye = await getEyes('Luke Skywalker');
    console.log(characterEye)
    let movieData = await getMovie('The Empire Strikes Back');
    console.log(movieData)

    const planetDIV = document.querySelector('#planet');
    planet.forEach(function(user){
        renderGithubUser(user, planetDIV);
    });
}) ();
