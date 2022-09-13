import React from "react";

const MovieCard = ({ movie }) =>{
    return(
        <div className="movie">
        <img src={movie.Poster !== "N/A" ? movie.Poster :'https://via.placeholder.com/400'} alt={movie.Title} />
            <div>
                <p>{movie.Title}</p>
                <p>{movie.Year}</p>
                <p>{movie.Type}</p>
            </div>
        </div>
    )
}

export default MovieCard;