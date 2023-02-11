import { useState } from "react";

function Accordion() {
    let [flag, setFlag] = useState(true);
    function expandAcc() {
        flag ? setFlag(false) : setFlag(true);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="accordion-container ">
                    <button
                        className="btn btn-primary accordion-head d-flex justify-content-between w-100"
                        onClick={expandAcc}
                        style={{ cursor: "pointer" }}
                    >
                        <span>Section 1</span> <span>{flag ? "+" : "-"}</span>
                    </button>
                    <div
                        className="accordion-body bg-primary text-light"
                        style={{ display: flag ? "none" : "block", height: "5rem" }}
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi deserunt natus repellendus?
                        Ipsam quam commodi fuga dignissimos ex, voluptatum numquam aperiam natus voluptas recusandae vel
                        corrupti similique animi est? Quod accusamus dolore sunt culpa minus. Tenetur delectus harum
                        laudantium voluptatum, illum consequuntur repudiandae temporibus sequi aliquid, eum laboriosam
                        animi ullam?
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;
