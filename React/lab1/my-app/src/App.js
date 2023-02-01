import "./App.css";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Personal from "./Components/Personal";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";

function App() {
    let firstName = "Anas";
    let lastName = "Tariq";
    let jobTitle = "Full-Stack Developer";
    return (
        <div className="App">
            <div className="username">
                <h1>
                    {firstName} <span>{lastName}</span>
                </h1>
                <h3>{jobTitle}</h3>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-7">
                        <About />
                        <Education />
                        <Experience />
                    </div>
                    <div className="offset-1 col-4">
                        <Personal />
                        <Contact />
                        <Skills />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
