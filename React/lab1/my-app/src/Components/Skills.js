import Header from "./Header";

function Skills() {
    return (
        <div>
            <Header title="Skills" />
            <div>
                <ul style={{ listStyle: "none" }}>
                    <li>
                        HTML
                        <div class="progress">
                            <div
                                class="progress-bar progress-bar-striped"
                                role="progressbar"
                                aria-label="Default striped example"
                                style={{ width: "95%" }}
                                aria-valuenow="10"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                    </li>
                    <li>
                        CSS
                        <div class="progress">
                            <div
                                class="progress-bar progress-bar-striped bg-success"
                                role="progressbar"
                                aria-label="Success striped example"
                                style={{ width: "90%" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                    </li>
                    <li>
                        Javasvript
                        <div class="progress">
                            <div
                                class="progress-bar progress-bar-striped bg-info"
                                role="progressbar"
                                aria-label="Info striped example"
                                style={{ width: "85%" }}
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                    </li>
                    <li>
                        React
                        <div class="progress">
                            <div
                                class="progress-bar progress-bar-striped bg-warning"
                                role="progressbar"
                                aria-label="Warning striped example"
                                style={{ width: "50%" }}
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                    </li>
                    <li>
                        Node
                        <div class="progress">
                            <div
                                class="progress-bar progress-bar-striped bg-danger"
                                role="progressbar"
                                aria-label="Danger striped example"
                                style={{ width: "40%" }}
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Skills;
