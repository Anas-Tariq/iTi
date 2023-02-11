import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";
// import MovieDetails from "./Components/MovieDetails";
import Movies from "./Components/Movies";
import Nav from "./Components/Nav";
import MovieDetailParams from "./Components/MovieDetailsParams";
import Counter from "./Components/Counter";
import Books from "./Components/Books";
import Cart from "./Components/Cart";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Nav />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/cart" element={<Cart />} />
                    {/* <Route path="/movieDetails" element={<MovieDetails />}></Route> */}
                    <Route path="/books" element={<Books />} />
                    <Route path="/movieDetails/:id" element={<MovieDetailParams />} />
                </Routes>
            </div>
        </Provider>
    );
}

export default App;
