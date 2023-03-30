import {getUserData, getLastCommit, wait} from "./promises-functions.js";

(async () => {

    let users = await getUserData();

    let commit = users.forEach(user => {
        getLastCommit(user.login);
    })

    const request = wait(3000);
    request.then(message => console.log('Return Time:', message))
    request.catch(message => console.log('How long do I wait?', message))

})();