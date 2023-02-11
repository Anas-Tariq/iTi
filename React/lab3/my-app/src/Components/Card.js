function Card({ data }) {
    return (
        <div className="card col-3">
            <img className="card-img-top" src={data.thumbnail} alt="Card image cap" />
            <div className="card-body">
                <h3 className="card-title">{data.title}</h3>
                <p className="card-title">${data.price}</p>
                <p className="card-text">{data.description}</p>
            </div>
        </div>
    );
}

export default Card;
