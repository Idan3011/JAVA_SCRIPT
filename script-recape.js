const movies = [
    {
id: 1,
title: "The Shawshank Redemption",
genre: "Drama",
director: "Frank Darabont",
releaseYear: 1994,
rating: 9.3,
votes: 2345890,
img: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
},
{
id: 2,
title: "The Godfather",
genre: "Crime, Drama",
director: "Francis Ford Coppola",
releaseYear: 1972,
rating: 9.2,
votes: 1620360,
img: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"

},
{
id: 3,
title: "The Godfather: Part II",
genre: "Crime, Drama",
director: "Francis Ford Coppola",
releaseYear: 1974,
rating: 9.0,
votes: 1133175,
img: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
},
{
id: 4,
title: "The Dark Knight",
genre: "Action, Crime, Drama",
director: "Christopher Nolan",
releaseYear: 2008,
rating: 9.0,
votes: 2303232,
img:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
},
{
id: 5,
title: "12 Angry Men",
genre: "Crime, Drama",
director: "Sidney Lumet",
releaseYear: 1957,
rating: 9.0,
votes: 689845,
img:"https://m.media-amazon.com/images/S/pv-target-images/b92d2865829416e35e7102a3934a2ee745f3b903a95678710442d4299d86f39c.jpg"
},
]


const movieContainerList = document.querySelector('.movie-container');
const cards = document.querySelector('.card');
const userForm = document.querySelector('#userForm');
const submit = document.querySelector('#submit');
const searchList = document.querySelector('#search-list');
const sortByName = document.querySelector('.a-z');
const sortByYear = document.querySelector('.realese-year');
const sortByRating = document.querySelector('.rating');
let newMovieObj = {};
let playOn = true;

function showMovies(movies){
    movieContainerList.innerHTML = '';
movies.forEach((movie)=>{
    const movieCard = document.createElement('div');
    movieCard.classList.add('card');
    const h2 = document.createElement('h2')
    h2.textContent = movie.title;
    movieCard.appendChild(h2);
    const mGenre = document.createElement('p');
    mGenre.textContent = `Genre: ${movie.genre}`;
    movieCard.appendChild(mGenre)
    const mDirector = document.createElement('p');
    mDirector.textContent =`Director: ${movie.director}`;
    movieCard.appendChild(mDirector)
    const mreleaseYear = document.createElement('p');
    mreleaseYear.textContent =`Release Year: ${movie.releaseYear}`;
    movieCard.appendChild(mreleaseYear)
    const mrating = document.createElement('p');
    mrating.textContent =`IMDB Rating: ${movie.rating}`;
    movieCard.appendChild(mrating)
    const mImg = document.createElement('img');
    mImg.src = movie.img;
    mImg.alt = movie.title;
    movieCard.appendChild(mImg);
    movieContainerList.appendChild(movieCard);

})
}

showMovies(movies)


        userForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    if(userForm){
    const newMovie = document.createElement('div');
    newMovie.classList.add('card');

    const mTitle = document.createElement('h2');
    mTitle.textContent = title.value;
    newMovie.appendChild(mTitle)

    const mGenre = document.createElement('p');
    mGenre.textContent = `Ganre: ${genre.value}`;
    newMovie.appendChild(mGenre);

    const mDirector = document.createElement('p');
    mDirector.textContent = `Director: ${director.value}`;
    newMovie.appendChild(mDirector);

    const mRealeseYear = document.createElement('p');
    mRealeseYear.textContent = `Release Year: ${realeseYear.value}`;
    newMovie.appendChild(mRealeseYear);

    const mRating = document.createElement('p');
    mRating.textContent =`IMDB Rating: ${rating.value}`;
    newMovie.appendChild(mRating);

    const nMImg = document.createElement('img');
    nMImg.src = img.value;
    nMImg.alt = newMovie.title;
    newMovie.appendChild(nMImg);

    movieContainerList.appendChild(newMovie)
    }
   
        newMovieObj = {
            id: movies.length+1,
            title: title.value,
            genre: genre.value,
            director: director.value,
            realeseYear: realeseYear.value,
            rating: rating.value,
            img: img.value
        }
        movies.push(newMovieObj)
    

})

 

function search(){
    let searchLower = searchList.value.toLowerCase().toString()
        movies.find((movie,index) => {
            let titleLower = movie.title.toLowerCase().toString()
        if(!titleLower.includes(searchLower)){
            movieContainerList.children[index].style.display = 'none';
            } else{
                movieContainerList.children[index].style.display = 'block';
            }
            })
    }
        searchList.addEventListener('input', (e)=>{
       if(searchList){
        search()
       }
})

        sortByName.addEventListener('click',() => {

        if(sortByName){
        showMovies(sortName)
        }
    }) 

const sortName = movies.sort()
function sortByname(event){
    showMovies(event)
}

const sort = movies.sort((a,b)=>{return b.rating-a.rating})
const sortAgain = movies.sort((a,b)=>{return a.rating-b.rating})
       
sortByRating.addEventListener('click',() => {
            if(playOn === true){
            sortByRate(sort)
            playOn = false
            console.log(`sort: ${playOn}`)
            } else{
                sortByRate(sortAgain);
                playOn = true
                console.log(`sortAgain: ${playOn}`)

            }
    })

  
function sortByRate(event){

    showMovies(event)
}
 let counter = 0;
        sortByYear.addEventListener('click', () => {
            if(counter%2 === 0){
                sortByYears(sorted)
                console.log(`even counter is: ${counter}`)
                counter++
            } else if(counter%2 !=0){
                sortByYears(sortedAgain)
                console.log(`UNeven counter is: ${counter}`)
                counter++
            }        
    })
    const sorted = movies.sort((a,b) =>{return b.releaseYear- a.releaseYear})
    const sortedAgain =movies.sort((a,b) => {return a.releaseYear-b.releaseYear})
function sortByYears(event){

    showMovies(event)
}