import Movie from "./Movie.js"

const MovieList = ({movies}) => {
    const MovieNodes = movies.map(movie =>{
        return <Movie name = {movie.name} key={movie.id}>{movie.url}</Movie>
    })

    return (
        <ul>
            {MovieNodes}
        </ul>
    );
};

export default MovieList;