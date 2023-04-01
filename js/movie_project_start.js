import {bgRender, getFavorite, getMovies, renderMovieCard, renderFavCard, setFavorite} from "./movie_project_bg.js"


bgRender();


(async() => {

    let intro = document.getElementById('intro');
    let content = document.getElementById('content');

//  GET MOVIES
    window.addEventListener('load', async () => {
        let controlCenter = document.querySelectorAll(".dg");
        controlCenter.forEach(n => n.remove());

        let jsonFav = await getFavorite();
        console.log(jsonFav);
        // Render the movies
        const favGrid = document.querySelector('#favGrid');
        jsonFav.forEach(function(jsonFav){
            renderFavCard(jsonFav, favGrid);
        });


        // Get movies
        let jsonMovies = await getMovies();
        console.log(jsonMovies);
        // Render the movies
        const moviesGrid = document.querySelector('#moviesGrid');
        jsonMovies.forEach(function(jsonMovies){
            renderMovieCard(jsonMovies, moviesGrid);
        });
        intro.classList.add('hide')
        content.classList.remove('hide')
    })

//  ADD NEW MOVIE
/*
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
*/

})();

let cards = document.getElementsByClassName("movie-card");

Array.prototype.forEach.call(cards, function(item) {
    console.log('item')
    item.addEventListener('click', () => {
        console.log('Hover')
        // movieCard.classList('message').remove()
    })
});
