import logo from "./echo.jpg";

function Personal() {
    let avatarStyle = {
        width: "10rem",
        height: "10rem",
        borderRadius: "50%",
    };
    return (
        <div className="text-center">
            <img src={logo} alt="Echo" style={avatarStyle} />
            <h2 className="text-center">Hello</h2>
        </div>
    );
}

export default Personal;
