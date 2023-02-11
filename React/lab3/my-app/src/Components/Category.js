import { useState } from "react";

function Category({ data }) {
    let [printArr, setPrintArr] = useState([]);
    function categorize(type) {
        if (type == "all") {
            setPrintArr(data);
        } else {
            let categorizedArr = data.filter((item) => item.category == type);
            setPrintArr(categorizedArr);
        }
    }

    return (
        <div>
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
        </div>
    );
}

export default Category;
