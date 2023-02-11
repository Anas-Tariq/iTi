import { useDispatch, useSelector } from "react-redux";
import { decQuantity, incQuantity } from "../Redux/cartSlice";

function Cart() {
    let cart = useSelector((state) => state.cartReducer.cart);
    let dispatch = useDispatch();
    function more(index) {
        dispatch(incQuantity(index));
    }
    function less(index) {
        dispatch(decQuantity(index));
    }
    // let [quantity, setQuantity] = useState(0);

    // function incQuant() {
    //     setQuantity(++quantity);
    // }
    // function decQuant() {
    //     setQuantity(--quantity);
    // }
    console.log(cart);
    return (
        <div>
            <div className="container">
                <div className="row">
                    {cart.map((movie, index) => (
                        <div className="col-4" key={index}>
                            <div className="card my-2" style={{ width: "18rem", height: "40rem" }}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    className="card-img-top"
                                    alt=""
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <div className="quantity-section">
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => {
                                                less(index);
                                            }}
                                        >
                                            -
                                        </button>
                                        <h2 style={{ display: "inline" }}>{movie.quantity}</h2>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => {
                                                more(index);
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cart;
