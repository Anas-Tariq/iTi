import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function MovieDetails() {
    const [movie, setMovie] = useState("");
    const location = useLocation();
    console.log(location.state.id);
    useEffect(() => {
        setMovie(location.state);
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                </div>
                <div className="col-6">
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
