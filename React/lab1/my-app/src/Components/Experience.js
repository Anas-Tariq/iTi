import Header from "./Header";

function Experience() {
    let expArr = [
        {
            companyName: "Apple",
            position: "Software Engineer",
            jobLocation: "Silicon Valley",
            discription:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum labore cum totam necessitatibus neque asperiores minima accusamus reprehenderit ducimus incidunt praesentium ab voluptates sit, dicta tempore explicabo provident, distinctio officia?",
        },
        {
            companyName: "Google",
            position: "Software Engineer",
            jobLocation: "LA",
            discription:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum labore cum totam necessitatibus neque asperiores minima accusamus reprehenderit ducimus incidunt praesentium ab voluptates sit, dicta tempore explicabo provident, distinctio officia?",
        },
    ];

    return (
        <div>
            <Header title="Experience" />

            {expArr.map((item) => (
                <div className="text-right mb-5">
                    <div>
                        <h2 className="m-0">{item.companyName}</h2>
                        <p className="m-0">{item.position}</p>
                        <p>{item.jobLocation}</p>
                    </div>
                    <p>{item.discription}</p>
                </div>
            ))}
        </div>
    );
}

export default Experience;
