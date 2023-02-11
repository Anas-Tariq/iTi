import logo from "./logo.svg";
import "./App.css";
import Coin from "./Components/Coin";
import Accordion from "./Components/Accordion";

function App() {
    return (
        <div className="App">
            <Coin />
            <br />
            <hr />
            <br />
            <Accordion />
        </div>
    );
}

export default App;
