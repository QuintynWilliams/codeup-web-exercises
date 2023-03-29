// include in you JS to USE || CMD + click to go there
import {getGithubUsers, renderGithubUser} from "./promises-github.js";

(async ()=>{
    // Get users
    let users = await getGithubUsers();
    console.log(users);
    // Render the users
    const usersGrid = document.querySelector('#userGrid');
    users.forEach(function(user){
        renderGithubUser(user, usersGrid);
    });



})();