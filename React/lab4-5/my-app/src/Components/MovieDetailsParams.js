import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetailParams() {
    let [movie, setMovie] = useState("");
    const params = useParams();
    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c`)

            .then((res) => {
                setMovie(res.data);
                console.log(res.data);
            });
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="" />
                </div>
                <div className="col-6">
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <h3>Budget: ${movie.budget}</h3>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailParams;
