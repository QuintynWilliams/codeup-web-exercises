// Does not need to be linked to HTML, script tags includes type module
export const getGithubUsers = async () => {
    try {
        let response = await fetch('https://api.github.com/users');
        let data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
    // the .then syntax (older)
    // return fetch('https://api.github.com/users')
    //     .then(response => response.json())
    //     .then(data => data)
    //     .catch(error=>{
    //         console.log(error);
    //     });
}

export const renderGithubUser = (user, parent) => {
    const element = document.createElement('div');
    element.classList.add('user-card');
    element.innerHTML = `
        <div class="img-wrapper">
            <img src="${user.avatar_url}" alt="User image" class="avatar">
        </div>
        <h2>${user.login}</h2>
        <a href="${user.html_url}" target="_blank">Go to Profile</a>
        <button>Remove</button>
    `;
    element.querySelector('button').addEventListener('click', function(){
        element.remove();
    });
    parent.appendChild(element);
}