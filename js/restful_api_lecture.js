"use strict";

const setFavorite = async (movie) => {
    try {
        let url = 'http://localhost:3000/favorites';
        let options = {
            // GET IS DEFAULT, No key required
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie),

        }
        let response = await fetch(url, options);
        let data = await response.json();
        return data
    } catch(error) {
        console.log(error)
    }
}

(async() => {

document.querySelector('button').addEventListener('click', async function () {

    const title = document.querySelector('#title').value;
    // console.log(title)
    const genre = document.querySelector('#genre').value;
    // console.log(genre)
    const rating = parseFloat(document.querySelector('#rating').value);
    // console.log(rating)

    // Documentaion will inform of the neccessary fields to a data send request
    let movieData = {
        title,
        genre,
        rating
    }

    let result =  await setFavorite(movieData)
})


})();