export default function MovieDisplay(props){

    const {movie} = props

    const noMovieResult= () => {
        return (
            <>
            <h3>No Movie Result</h3>
            </>
        )
        }
    
    const movieResult = () => {
        return(
            <>
            <h4>{movie.Title}</h4>
            <h4>{movie.Genre}</h4>
            <h4>{movie.Year}</h4>
            {movie.Poster && <img src={movie.Poster}/> }
            <h4>{movie.Runtime}</h4>
            <h4>{movie.Actors}</h4>
            <h4>{movie.Rated}</h4>
            <h4>{movie.Plot}</h4>
            <h4>{movie.Awards}</h4>
            </>
        );
    }







    return (
        <>
        <h1>Movie Display</h1>
        {movie? movieResult(): noMovieResult()}
        </>
    )
}