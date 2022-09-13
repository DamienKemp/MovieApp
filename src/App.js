import { useEffect, useState } from "react";
import './App.css'
import SeachIcon from './search.svg'
import MovieCard from "./MovieCard";

const api_url = 'http://omdbapi.com?apikey=c5a57207';



const movie1 = {
    "Title": "Superman, Spiderman or Batman",
    "Year": "2011",
    "imdbID": "tt2084949",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}

const App = () =>{

    const [movies,setMovies] = useState([]);
    const [searchTerm,setSearchTerm] = useState('')

    const Search = async(title) =>{
        const respone = await fetch(`${api_url}&s=${title} `);
        const data = await respone.json()

        setMovies(data.Search)
    };


    useEffect(() => {
        Search('SpiderMan')
    }, []);


    return (
        <div className = 'app'>
            <h1>MovieTopia</h1>
            <div className='search'> 
                <input
                    placeholder="Search For movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src= {SeachIcon}
                    alt="search"
                    onClick={() => Search(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                ?(
                    <div className = "container">
                        <div className="Movies">
                        {movies.map((movie) =>( 
                            <MovieCard movie={movie}/>
                            ))}
                        </div>
                    </div> 
                ):
                (
                    <div className="empty">
                        <h3>Movie wasn't found</h3>
                    </div>
                )
            }
        </div>
    );
}

export default App;