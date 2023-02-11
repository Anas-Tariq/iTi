import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/cartSlice";

function MovieCard({ data }) {
    const nav = useNavigate();
    let dispatch = useDispatch();
    function goToDetails(data) {
        nav("/movieDetails/" + data.id);
    }
    function add() {
        dispatch(addItem({ ...data, quantity: 1 }));
    }
    return (
        <div className="col-3">
            <div className="card my-2" style={{ width: "18rem", height: "40rem" }}>
                <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.release_date}</p>
                    <p className="card-text">
                        {data.vote_average} <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                    </p>
                    <button
                        to="#"
                        className="btn btn-primary"
                        onClick={() => {
                            goToDetails(data);
                        }}
                    >
                        More Details
                    </button>
                    <button className="btn btn-success" onClick={add}>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
