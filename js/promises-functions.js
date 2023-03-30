
export const getUserData = async () => {
    try {
        let response = await fetch('https://api.github.com/users', {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`
            }
        });
        let data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
}

//  Create a function that accepts a GitHub username, and returns a promise
//  that resolves returning just the date of the last commit that user made
export const getLastCommit = async (userName) => {
    try {
        let response = await fetch(`https://api.github.com/users/${userName}/events/public`, {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`
            }
        });
        let data = await response.json();
//      .find returns the first only  vs . filter returns all
        let commit = data.find(n => {
            return n.type === 'PushEvent';
        })
        if (commit !== undefined) {
            return `${commit.actor.login}: ${commit.created_at}`
        }

    } catch (error) {
        console.log(error);
    }
}



export function wait(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time !== '') {
                resolve(`here for ${time/1000} seconds`);
            } else {
                reject('Network Connection Error!');
            }
        }, time);
    });
}
