// include in you JS to USE || CMD + click to go there
import {getGithubUsers} from "./promises-github.js";

(async () => {
//     SEPERATION OF CONCERNS
//     put GET in own funciton to enable later use
//     write all funcitons with GET data in its own JS file
    let users = await getGithubUsers();
    console.log(users)
})();