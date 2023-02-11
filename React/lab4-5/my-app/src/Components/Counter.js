import { useDispatch, useSelector } from "react-redux";
import { incCounter, decCounter } from "../Redux/counterSlice";

function Counter() {
    const dispatch = useDispatch();
    let selectCounter = useSelector((state) => state.counterReducer.counter);

    function counterPlus() {
        dispatch(incCounter());
    }
    function counterMinus() {
        dispatch(decCounter());
    }
    return (
        <div className="d-flex justify-content-between align-items-center gap-3 h-50 w-25" style={{ margin: "0 auto" }}>
            <button className="btn btn-success" onClick={counterMinus}>
                -
            </button>
            <h2>{selectCounter}</h2>
            <button className="btn btn-success" onClick={counterPlus}>
                +
            </button>
        </div>
    );
}

export default Counter;
