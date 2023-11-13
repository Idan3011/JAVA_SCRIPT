let movies = [
    {
    id: 1,
    title: "The Shawshank Redemption",
    genre: "Drama",
    director: "Frank Darabont",
    releaseYear: 1994,
    rating: 9.3,
    votes: 2345890,
    },
    {
    id: 2,
    title: "The Godfather",
    genre: "Crime, Drama",
    director: "Francis Ford Coppola",
    releaseYear: 1972,
    rating: 9.2,
    votes: 1620360,
    },
    {
    id: 3,
    title: "The Godfather: Part II",
    genre: "Crime, Drama",
    director: "Francis Ford Coppola",
    releaseYear: 1974,
    rating: 9.0,
    votes: 1133175,
    },
    {
    id: 4,
    title: "The Dark Knight",
    genre: "Action, Crime, Drama",
    director: "Christopher Nolan",
    releaseYear: 2008,
    rating: 9.0,
    votes: 2303232,
    },
    {
    id: 5,
    title: "12 Angry Men",
    genre: "Crime, Drama",
    director: "Sidney Lumet",
    releaseYear: 1957,
    rating: 9.0,
    votes: 689845,},
];

//1

function getMovieInitials(title){
    let initial = title.split(' ');
    let initials = '';
    initial.forEach((value) => { 
            initials += `${value[0].toUpperCase()}`
    })
    console.log(initials)
}

//getMovieInitials('12 Angry men')

//2

function splitGenres(genres){
   console.log(genres.split(', '))

}

//splitGenres("Action, Adventure, Sci-Fi")


//3.
const  getTotalMovieLength =( movie) => {
    let totalLength = 0;
    for (let i = 0; i < movie.length; i++) {
    totalLength += movie[i].length;
    }
    return 'Total movie length is ' + totalLength + ' minutes';
}
//console.log(getTotalMovieLength(movies))

//Array Methodes///

//1.

function movieTitles(movie){
    let titles = [];

    for (let i=0; i<movie.length; i++){
        titles.push(movie[i].title)
    }
    console.log(titles)
}

//movieTitles(movies)

//2

function ratingMovies(movie){
    let rate = [];

    for(let i=0; i<movie.length; i++){
        if(movie[i].rating > 9.1){
            rate.push(movie[i].title)
        }
    }
    console.log(rate)
}

//ratingMovies(movies)

//3.

function avarageRating1(movie){
    let rate =0;
    let counter =0;
    for(let i=0; i<movie.length; i++){
        rate += movie[i].rating
        counter++
    }
    console.log(rate/counter)
}

//avarageRating1(movies)

//4.


function votesSort(movie){
    let voteArr = [];
    let voteRating = [];
    for(let i=0; i<movie.length; i++){
        voteArr.push(movie[i].votes)
        voteArr.sort((a,b) => {return b-a})
    }
    voteArr.forEach(element => {
        for(let i=0 ;i<movie.length; i++){
        if(movie[i].votes == element){
            voteRating.push(movie[i].title)
        }
    }
    })
    console.log(voteRating)
}

//votesSort(movies)

//Objects//

//1.
let movieDataBase = {
    Movies: [
    ]
}



function addMovie(title,rating, avarageRating){
        let newMovie = {
            title,
            rating,
            avarageRating,
            }
        
            movieDataBase.Movies.push(
                newMovie
            )
            
}

addMovie("The Shawshank Redemption",[],0)

//console.log(movieDataBase);

function removeMovie(movieName){
    for (let index = 0; index < movieDataBase.Movies.length; index++) {
        if(movieDataBase.Movies[index].title=== movieName){
            movieDataBase.Movies.splice(movieName)
        }
    }
}

//removeMovie('The Shawshank Redemption')

//console.log(movieDataBase)

function addRating(movieName, rate){
    for(let i=0; i<movieDataBase.Movies.length; i++){
        if(movieDataBase.Movies[i].title === movieName){
            movieDataBase.Movies[i].rating =rate;
        }
    }
}

addRating('The Shawshank Redemption', [9.1, 8.6, 9.3, 9.6, 8])

//console.log(movieDataBase.Movies[0].rating)

function removeRating(movieName, rate){

        for(let i=0; i<movieDataBase.Movies.length; i++){
            for(let j=0; j<movieDataBase.Movies[i].rating.length; j++){
        if(movieDataBase.Movies[i].title == movieName && movieDataBase.Movies[i].rating[j]== rate){
            movieDataBase.Movies[i].rating.splice(j,1)
            break
        } else{
            console.log(`there is No Rating value: '${rate}'. please try again.`)
            break
        }
        }
        }
    
}


//removeRating('The Shawshank Redemption',9.1)

//console.log(movieDataBase.Movies[0].rating)










// function movieDataBase(movie){
//     let dataBase={
//         Movies: [{
    
//         }]
//     }
//     movie.forEach((element) => {
//             dataBase.Movies.push( {
//                 title: element.title,
//                 rating: [],
//                 avarageRating
//             }
//             )
        
//     })  
//         console.log(dataBase)
// }
    


//movieDataBase(movies)

//3.