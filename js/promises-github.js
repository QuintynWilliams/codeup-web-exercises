// Does not need to be linked to HTML, script tags includes type module
export const getGithubUsers = async () => {
    try {
//                              Does not require a key V
        let response = await fetch('https://api.github.com/users');
        let data = await response.json();
        return data
    } catch (error) {
        console.log(error)
    }
//     finally {
//      always runs, in the last position, catch initiation or not
//  }
//     .then syntax (classic)
//     fetch('https://api.github.com/users')
//         .then(response => response.json())
//         .then(data => data)
//         .catch(error => {
//     Always have a plan if errors occur, prevents JS from stopping here
//         console.error(error)
//         });
}