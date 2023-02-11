import { useState } from "react";
import Card from "./Card";

function Product() {
    let [printArr, setPrintArr] = useState([]);
    let [input, setInput] = useState("");

    let arr = JSON.parse(localStorage.getItem("data"));
    let categorizedArr = [];

    function categorize(type) {
        if (type == "all") {
            setPrintArr(arr);
        } else {
            categorizedArr = arr.filter((item) => item.category == type);
            setPrintArr(categorizedArr);
        }
    }

    function searchChange(e) {
        console.log(e.target.value);
        setInput(e.target.value);

        // categorizedArr = arr.filter((item) => item.title == input);
        // setPrintArr(categorizedArr);
    }
    return (
        <div className="container">
            <label htmlFor="serachInput" class="form-label">
                Search
            </label>
            <input
                className="form-control"
                list="datalistOptions"
                id="serachInput"
                placeholder="Type to search..."
                onChange={searchChange}
            />
            <h1>{input}</h1>

            <div className="filterBtn d-flex justify-content-between">
                <button
                    className="btn btn-primary px-2"
                    onClick={() => {
                        categorize("all");
                    }}
                >
                    All
                </button>
                <button
                    className="btn btn-primary px-2"
                    name="smartphones"
                    onClick={() => {
                        categorize("smartphones");
                    }}
                >
                    Smartphones
                </button>
                <button
                    className="btn btn-primary px-2"
                    name="laptops"
                    onClick={() => {
                        categorize("laptops");
                    }}
                >
                    Laptops
                </button>
                <button
                    className="btn btn-primary px-2"
                    name="fragrances"
                    onClick={() => {
                        categorize("fragrances");
                    }}
                >
                    Fragrances
                </button>
                <button
                    className="btn btn-primary px-2"
                    name="skincare"
                    onClick={() => {
                        categorize("skincare");
                    }}
                >
                    Skincare
                </button>
                <button
                    className="btn btn-primary px-2"
                    name="groceries"
                    onClick={() => {
                        categorize("groceries");
                    }}
                >
                    Groceries
                </button>
                <button
                    className="btn btn-primary px-2"
                    name="home-decoration"
                    onClick={() => {
                        categorize("home-decoration");
                    }}
                >
                    Home Decoration
                </button>
            </div>
            <div className="row">
                {printArr.map((item, index) => (
                    <Card key={index} data={item} />
                ))}
            </div>
        </div>
    );
}

export default Product;
