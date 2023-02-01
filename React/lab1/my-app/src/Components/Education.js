import Header from "./Header";

function Education() {
    let eduArr = [
        {
            degree: "Bacholer",
            university: "Helwan University",
            jobLocation: "Cairo - Egypt",
            discription:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum labore cum totam necessitatibus neque asperiores minima accusamus reprehenderit ducimus incidunt praesentium ab voluptates sit, dicta tempore explicabo provident, distinctio officia?",
        },
        {
            degree: "Internship",
            university: "iTi",
            jobLocation: "Aswan - Egypt",
            discription:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum labore cum totam necessitatibus neque asperiores minima accusamus reprehenderit ducimus incidunt praesentium ab voluptates sit, dicta tempore explicabo provident, distinctio officia?",
        },
    ];
    return (
        <div>
            <Header title="Education" />
            {eduArr.map((item) => (
                <div className="text-right mb-5">
                    <div>
                        <h2 className="m-0">{item.degree}</h2>
                        <p className="m-0">{item.university}</p>
                        <p>{item.jobLocation}</p>
                    </div>
                    <p>{item.discription}</p>
                </div>
            ))}
        </div>
    );
}

export default Education;
