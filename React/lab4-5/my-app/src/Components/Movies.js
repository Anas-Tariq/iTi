import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function Movies() {
    let [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c").then((res) => {
            // console.log(res.data.results);
            setMovies(res.data.results);
        });
    });
    return (
        <div>
            <h3>Movies</h3>
            <div className="container-fluid">
                <div className="row">
                    {movies.map((movie, index) => (
                        <MovieCard key={index} data={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Movies;
